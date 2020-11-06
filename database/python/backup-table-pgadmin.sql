-- Table: public.visvangsten

-- DROP TABLE public.visvangsten;

CREATE TABLE public.visvangsten
(
    id bigint NOT NULL DEFAULT nextval('visvangsten_id_seq'::regclass),
    datum date,
    tijd time without time zone,
    vissoort character varying COLLATE pg_catalog."default",
    locatie geometry,
    CONSTRAINT visvangsten_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.visvangsten
    OWNER to postgres;