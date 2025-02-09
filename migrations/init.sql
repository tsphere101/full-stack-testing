CREATE TABLE public.users (
    id              uuid PRIMARY KEY,
    first_name      text NOT NULL,
    last_name       text NOT NULL,
    age             int NOT NULL,
    gender          text NOT NULL,
    phone_number    text NULL,
    email           text NOT NULL,
    picture         text ,
    created_at      timestamptz NOT NULL DEFAULT NOW(),
    updated_at      timestamptz NOT NULL DEFAULT NOW() 
);