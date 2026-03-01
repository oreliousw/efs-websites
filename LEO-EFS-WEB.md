# LEO-EFS-WEB

Static website for Exec Flight Services (EFS) — flight training business site.

## Access

- **Domain:** https://execflightservices.com
- **Internal:** http://127.0.0.1:8084
- **Tunnel:** Cloudflare Tunnel (`cloudflared-leo.service`) → `execflightservices.com`

## Structure

```
leo-efs-web/
├── efs1/           ← old site (archived)
└── efs2/           ← website root served by nginx on port 8084
    ├── index.html
    ├── css/
    ├── js/
    └── images/
```

## Serving

- **Nginx** serves `efs2/` as a static site on port 8084
- **Cloudflare Tunnel** routes `execflightservices.com` and `www.execflightservices.com` → `localhost:8084`
- DNS: Cloudflare (CNAMEs pointing to `eb4572ba-d4eb-4322-9662-e1515bbac2d3.cfargotunnel.com`)
- Registrar: Square Domains

## Tunnel Config

`/home/ubu/.cloudflared/config.yml` — `execflightservices.com` and `www.execflightservices.com` entries

## To Update Site

Edit files in `efs2/` — nginx serves them directly, no restart needed.
