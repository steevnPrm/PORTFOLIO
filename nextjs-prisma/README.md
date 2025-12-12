# 🌐 Portfolio – Site Vitrine

**Stack : Next.js • Prisma • PostgreSQL • Vercel**

Ce dépôt contient le code source de mon **site vitrine** développé avec **Next.js**, utilisant **Prisma** pour la gestion des données et déployé sur **Vercel**.
Le site présente mes services, mes compétences et une sélection de projets réalisés en tant que développeur web.

---

## 🚀 Objectifs du projet

- Présenter mon activité, mes services et mes réalisations.
- Permettre aux visiteurs d’accéder rapidement aux informations essentielles.
- Proposer une interface **responsive**, **performante** et **accessible (RGAA)**.
- Assurer un backend minimal mais sécurisé grâce à **Prisma + API Routes**.

---

## 🧱 Fonctionnalités principales

- Page d’accueil avec tagline + mise en avant de mes services.
- Page “Services” détaillant mes prestations.
- Page “Projets / Portfolio”.
- Page Contact avec API d’envoi (Email ou DB selon config).
- Responsive design (mobile-first).
- Conformité RGAA :
  - Structure sémantique
  - Contraste correct
  - Textes alternatifs
  - Navigation clavier

- Sécurité côté backend :
  - Prisma avec validations
  - API Routes sécurisées
  - Pas de données persos persistées sans consentement

- Déploiement automatisé sur Vercel.

---

## 🛠️ Technologies utilisées

### **Frontend**

- Next.js 14+ (App Router)
- React 18
- TailwindCSS
- TypeScript

### **Backend**

- Next.js API Routes
- Prisma ORM
- PostgreSQL (ou autre SGBD compatible)

### **Déploiement**

- Vercel (CI/CD intégré)
- Prisma Accelerate / Data Proxy (optionnel)

---

## 📁 Structure du projet

```text
/
├── prisma/
│   └── schema.prisma        # Modèle de données
├── src/
│   ├── app/
│   │   ├── page.tsx         # Page d’accueil
│   │   ├── services/        # Page Services
│   │   ├── portfolio/       # Page Réalisations
│   │   ├── contact/         # Page Contact + formulaire
│   │   └── api/             # API routes (contact, messages…)
│   ├── components/          # UI + blocs réutilisables
│   ├── lib/                 # Fonctions utilitaires (Prisma client)
│   └── styles/              # Styles globaux
├── .env                     # Variables d’environnement
├── package.json
└── README.md
```

---

## ▶️ Installation & démarrage

### **1. Cloner le projet**

```bash
git clone https://github.com/mon-compte/portfolio.git
cd portfolio
```

### **2. Installer les dépendances**

```bash
npm install
```

### **3. Configurer l’environnement**

Créer un fichier **.env** :

```env
DATABASE_URL="postgresql://user:password@host:port/database"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### **4. Migrer la base de données**

```bash
npx prisma migrate dev
```

### **5. Lancer le serveur de développement**

```bash
npm run dev
```

---

## 🔧 Commandes utiles Prisma

```bash
# Ouvrir Prisma Studio
npx prisma studio

# Synchroniser le schema
npx prisma generate
```

---

## ☁️ Déploiement sur Vercel

1. Pousser le repo sur GitHub.
2. Aller sur [https://vercel.com/import](https://vercel.com/import)
3. Sélectionner le repo → Build auto.
4. Ajouter `DATABASE_URL` dans les variables d’environnement.
5. Déployer 🎉

Option (recommandé) :
Activer **Prisma Data Proxy** ou **Accelerate** pour de meilleures perfs.

---

## 🔒 Notes sur la sécurité & RGPD

- Aucune donnée personnelle n’est stockée sans consentement explicite.
- Les messages du formulaire peuvent être :
  - soit envoyés par email uniquement,
  - soit stockés (avec une durée maximale selon la CNIL).

- API sécurisée contre :
  - injections SQL (Prisma protège nativement)
  - spam (ratelimit possible via middleware)
  - XSS et CSRF (gérés par Next.js)

---

## 📬 Contact [à venir]

Pour toute suggestion ou amélioration :
📧 [contact@monsite.com](mailto:contact@monsite.com)
🌐 [https://mondomaine.com](https://mondomaine.com)

---
