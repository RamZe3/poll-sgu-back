create TABLE users
(
    id       SERIAL PRIMARY KEY,
    login    VARCHAR(255),
    email    VARCHAR(255),
    password VARCHAR(255)
);

create TABLE templates
(
    id        SERIAL PRIMARY KEY,
    title     VARCHAR(255),
    x_range_l INTEGER,
    x_range_r INTEGER,
    y_range_l INTEGER,
    y_range_r INTEGER,
    x_tics    INTEGER,
    y_tics    INTEGER,
    func      VARCHAR(255)[],
    grid      boolean,
    x_label   VARCHAR(255),
    y_label   VARCHAR(255),
    width     INTEGER,
    height    INTEGER,
    p_script  VARCHAR(255),
    user_id   INTEGER ALLOW NULL,
    creation_date timestamp,
    FOREIGN KEY (user_id) REFERENCES users (id)
);

DELETE
FROM public.templates
DELETE
FROM public.users
