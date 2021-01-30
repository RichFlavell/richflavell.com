# RichFlavell.com

> My personal lightweight writing platform, built with React & Gatsby

---

## Installation & Setup

> Clone the repository

```sh
  $ git clone https://github.com/RichFlavell/richflavell.com.git
```

> Navigate to the project root and install all the required packages

```sh
  $ yarn
```

> Start the local dev server! (This is just a proxy of `gatsby develop`)

```sh
  $ yarn start
```

Options and more information for the local dev server can be found <a href="https://www.gatsbyjs.org/docs/gatsby-cli/#develop">here</a>

---

## Structure

```
.
├── static                        # Any static site content should go in here
│
└── src                           # Application source code
    ├── components                # Component library
    │   └── <Component>
    │       ├── index.tsx
    │       └── style.ts
    ├── config                    # Global application configuration properties
    │   └── style                 # Style configuration files
    ├── context                   # Collection of application context providers
    │   └── <Context>.tsx
    ├── hooks                     # Collection of custom hooks
    │   └── <hook>.ts
    ├── locales                   # Internationalization
    │   └── <locale>
    │       └── <Component>.json  # The namespace should match 1-1 the component name
    ├── icons                     # Bundled icons
    │   └── <icon>.svg
    ├── images                    # Bundled images
    │   └── <image>
    ├── pages                     # Gatsby page hooks, / -> index & error code handlers
    │   ├── 404.tsx
    │   └── index.tsx
    ├── posts                     # Content directory. Each post has an associated page generated
    │   └── <post>
    │       ├── images
    │       │   └── <image>
    │       └── index.mdx         # MDX enables the use of imported components inside markdown
    ├── types                     # Module defenitions
    │   └── <type>.d.ts
    ├── utils                     # Reusable utilities
    │   └── <util>.ts
    └── views                     # View components. Pages are not generated for these views
        └── <View>
            ├── style.ts
            └── index.tsx
```

---

## Get in touch!

Email: <a href="mailto:me@richflavell.com">me@richflavell.com</a>

Twitter: <a href="https://twitter.com/RichFlavell">@RichFlavell</a>
