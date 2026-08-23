CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;

CREATE TABLE public.sprayings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  crop TEXT NOT NULL DEFAULT '',
  field TEXT DEFAULT '',
  product_used TEXT DEFAULT '',
  reason TEXT DEFAULT 'Pest',
  dosage TEXT DEFAULT '',
  quantity_mixed TEXT DEFAULT '',
  sprayed_by TEXT DEFAULT '',
  weather TEXT DEFAULT '',
  interval_info TEXT DEFAULT '',
  next_due_date DATE,
  remarks TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.activities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  activity TEXT NOT NULL DEFAULT '',
  area TEXT DEFAULT '',
  performed_by TEXT DEFAULT '',
  hours NUMERIC DEFAULT 0,
  materials TEXT DEFAULT '',
  cost NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'Done',
  remarks TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.animal_treatments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  animal_name TEXT NOT NULL DEFAULT '',
  species TEXT DEFAULT '',
  treatment TEXT DEFAULT '',
  reason TEXT DEFAULT 'Routine',
  dosage TEXT DEFAULT '',
  route TEXT DEFAULT 'Oral',
  treated_by TEXT DEFAULT '',
  cost NUMERIC NOT NULL DEFAULT 0,
  next_due_date DATE,
  remarks TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.bird_treatments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  flock_id TEXT NOT NULL DEFAULT '',
  bird_type TEXT DEFAULT 'Layer',
  bird_count INTEGER DEFAULT 0,
  treatment TEXT DEFAULT '',
  reason TEXT DEFAULT 'Routine',
  dosage TEXT DEFAULT '',
  route TEXT DEFAULT 'Water',
  treated_by TEXT DEFAULT '',
  cost NUMERIC NOT NULL DEFAULT 0,
  next_due_date DATE,
  remarks TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.harvests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  crop TEXT NOT NULL DEFAULT '',
  field TEXT DEFAULT '',
  quantity_kg NUMERIC NOT NULL DEFAULT 0,
  remarks TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE public.sales (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  crop TEXT NOT NULL DEFAULT '',
  quantity_kg NUMERIC NOT NULL DEFAULT 0,
  price_per_kg NUMERIC NOT NULL DEFAULT 0,
  buyer TEXT DEFAULT '',
  remarks TEXT DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

DO $$
DECLARE t TEXT;
BEGIN
  FOREACH t IN ARRAY ARRAY['sprayings','activities','animal_treatments','bird_treatments','harvests','sales'] LOOP
    EXECUTE format('GRANT SELECT, INSERT, UPDATE, DELETE ON public.%I TO authenticated;', t);
    EXECUTE format('GRANT ALL ON public.%I TO service_role;', t);
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY;', t);
    EXECUTE format('CREATE POLICY "own rows" ON public.%I FOR ALL TO authenticated USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);', t);
    EXECUTE format('CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.%I FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();', t);
    EXECUTE format('CREATE INDEX %I ON public.%I (user_id, date DESC);', 'idx_'||t||'_user_date', t);
  END LOOP;
END $$;