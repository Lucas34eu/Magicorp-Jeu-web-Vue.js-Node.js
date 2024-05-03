# Clean Title Backend



## Installer les dépendances

Installer NPM puis effectuer la commande suivante :
```
npm install
```
### Démarrer le serveur
Vérifier que vous vous trouvez bien dans le dossier backend (Ubuntu: cd backend/), puis effectuer la commande suivante :
```
node server.js
```
### Le serveur est maintenant démarré.

## BDD

### User
```
    {
        id: {
            type:DataTypes.INT
        }
        nom: {
            type: DataTypes.STRING,
        },
        prenom: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        idAdmin: {
            type: DataTypes.BOOLEAN,
        },
        isMecanicien: {
            type: DataTypes.BOOLEAN,
        },
        isVerified: {
            type: DataTypes.BOOLEAN,
        },
    }
```

### Historique
```
    {
        userId: {
            type: DataTypes.INT,
        }
        AppelId: {
            type: DataTypes.INT,
        }
        duree: {
            type: DataTypes.STRING,
        }
    }
```

### Post
```
    {
        id: {
            type: DataTypes.INT,
        }
        contenue: {
            type: DataTypes.STRING,
        }
        userId: {
            type: DataTypes.INT,
        }

    }
```

### Enregistrer_Article
```
    {
        userId: {
            type: DataTypes.INT,
        }

        articleId: {
            type: DataTypes.INT,
        }
    }
```

### Enregistrer_Forum
```
    {
       userId: {
            type: DataTypes.INT,
        }
        forumId: {
            type: DataTypes.INT,
        }
    }
```

### Appel
```
    {
         id: {
            type: DataTypes.INT,
        }
         duree: {
            type: DataTypes.STRING,
        }
    }
```

### Article
```
    {
        id: {
            type: DataTypes.INT,
        },
        title: {
            type: DataTypes.STRING,
        },
        contenue: {
            type: DataTypes.STRING,
        }
        tag: {
            type: DataTypes.STRING,
        },
    }
```

### Forum
```
    {
        id: {
            type: DataTypes.INT,
        },
        title: {
            type: DataTypes.STRING,
        },
        contenue: {
            type: DataTypes.STRING,
        }
    }
```

### Vehicule
```
    {
        id: {
            type: DataTypes.INT,
        },
        marque: {
            type: DataTypes.STRING,
        },
        modele: {
            type: DataTypes.STRING,
        },
        imatriculation: {
            type: DataTypes.STRING,
        }
    }
```
 


## Routes

### Connexion & Register
S'enregister
- *POST* `/api/register`
Se connecter
- *POST* `/api/login`

### User
Ajouter un utilisateur
- *POST* `/api/AddUser`
Récupèrer les utilisateurs
- *GET* `/api/GetUsers`
Modifier le mot de passe d'un utilisateur par l'Id
- *PUT* `/api/PutUserPassword/:id`
- *PUT* `/api/PutUserMilit/:id`
- *PUT* `/api/PutUserCivil/:id`
Supprimer un utilisateur par l'Id
- *DELETE* `/api/DeleteUser/:id`

### Historique
Récupèrer l'historique
- *GET* `/api/GetHistoriques`
Ajouter un historique
- *POST* `/api/AddHistorique`
Suprimer un historique par l'Id
- *DELETE* `/api/DeleteHistorique/:id`

### Post
Récupèrer tous les posts
- *GET* `/api/GetPosts`
Ajouter un post
- *POST* `/api/AddPost`
Modifier un post par l'Id
- *PUT* `/api/PutPost/id`
Supprimer un post par l'Id
- *DELETE* `/api/DeletePost/:id`

### Enregistrer_Article
- *GET* `/api/GetEnregistrer_Articles`
- *POST* `/api/AddEnregistrer_Article`
- *DELETE* `/api/DeleteEnregistrer_Article/:id`

### Enregistrer_Forum
- *GET* `/api/GetEnregistrer_Forums`
- *POST* `/api/AddEnregistrer_Forum`
- *DELETE* `/api/DeleteEnregistrer_Forum/:id`

### Appel
Récupèrer tous les appels
- *GET* `/api/GetAppel`
Ajouter un appel
- *POST* `/api/AddAppel`
Modifier un appel par l'Id
- *PUT* `/api/putAppel/:id`
Supprimer un appel par l'Id
- *DELETE* `/api/DeleteAppel/:id`

### Article
Récupèrer tous les articles
- *GET* `/api/GetArticles`
Ajouter un article
- *POST* `/api/AddArticle`
Modifier un article par l'Id
- *PUT* `/api/PutArticle/:id`
Supprimer un article par l'Id
- *DELETE* `/api/DeleteArticle/:id`

## Le serveur est maintenant démarrer. Enjoy

