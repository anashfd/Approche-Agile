/* chapters */
const chapters = [
    {
        id: `accueil`,
        title: `Accueil`,
        type: `accueil`,
        html: `<p class="intro">Bienvenue ! Ce cours suit un parcours logique : du projet en général jusqu'aux méthodes agiles. Cliquez sur un chapitre pour commencer.</p><ol class="plan" id="plan"></ol><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR6QvpBw-WYjRfCj5q2pssXe9UGYxFMoKceurIZFGlx9b5PMsDavqn2ltc&s=10" alt="Approche Agile">`
    },
    {
        id: `fonda`,
        part: `Le projet`,
        title: `Fondamentaux du projet`,
        intro: `Les notions de base à connaître avant toute chose.`,
        groups: [
            {
                title: `Notions de base`,
                items: [
                    {
                        title: `Projet`,
                        text: `Un projet est un ensemble d'activités organisées et ordonnées, menées pour atteindre un objectif précis et produire un résultat déterminé (le livrable), avec des ressources et dans un délai définis.<p><strong>Exemple :</strong> créer une application de réservation de salles pour un centre de formation est un projet : il a un début, une fin, un objectif et un livrable. Gérer les réservations au quotidien est une activité courante, pas un projet.</p>`
                    },
                    {
                        title: `Caractéristiques d'un projet`,
                        text: `Un projet se reconnaît à cinq éléments de base :<ul><li>un objectif</li><li>un livrable</li><li>une durée limitée</li><li>des activités</li><li>des ressources</li></ul><p><strong>Exemple :</strong> objectif : permettre la réservation en ligne ; livrable : l'application ; durée : 3 mois ; activités : analyser, concevoir, développer, tester ; ressources : 3 développeurs, un serveur, un budget.</p><p>Ce même exemple de « centre de formation » sert de fil rouge dans tout le site.</p>`
                    },
                    {
                        title: `Gestion de projet`,
                        text: `Ensemble des méthodes, techniques et outils utilisés pour organiser, planifier, réaliser, suivre et contrôler un projet, afin d'atteindre ses objectifs tout en respectant les contraintes de délai, de budget et de qualité.<p>Elle répond à quatre questions : <strong>quoi</strong> (objectifs, livrables), <strong>qui</strong> (équipe, rôles), <strong>quand</strong> (planning) et <strong>combien</strong> (budget). Son but est de garder le projet sous contrôle malgré les imprévus.</p>`
                    },
                    {
                        title: `Ressource`,
                        text: `Moyen nécessaire pour réaliser un projet. Il peut être humain, matériel, financier ou temporel.<ul><li><strong>Humaines</strong> : chef de projet, développeurs, testeurs</li><li><strong>Matérielles</strong> : ordinateurs, serveurs</li><li><strong>Financières</strong> : budget, salaires</li><li><strong>Temporelles</strong> : les semaines disponibles</li></ul>`
                    },
                    {
                        title: `Livrable`,
                        text: `Résultat concret, vérifiable et attendu, produit pendant ou à la fin d'un projet.<p><strong>Exemple :</strong> cahier des charges, maquettes, code source, rapport de test, manuel utilisateur. Un « livrable » doit pouvoir être vérifié : on peut dire s'il est terminé ou non.</p>`
                    }
                ]
            },
            {
                title: `Cadrer le projet`,
                items: [
                    {
                        title: `Périmètre d'un projet`,
                        text: `Limites du projet : ce qui est inclus et ce qui est exclu.<p><strong>Exemple :</strong> inclus : réserver et annuler une salle ; exclu : paiement en ligne.</p><p>Attention à la <strong>dérive du périmètre</strong> (<em>scope creep</em>) : ajouter des demandes en cours de route sans revoir délai et budget.</p>`
                    },
                    {
                        title: `Contexte d'un projet`,
                        text: `Ensemble des informations qui caractérisent le projet et lui donnent de la profondeur. Il comprend les facteurs internes et externes qui l'influencent (économiques, environnementaux, etc.).<p><strong>Exemple :</strong> le centre manque de salles et gère ses réservations sur papier (interne) ; la concurrence propose déjà la réservation en ligne (externe).</p>`
                    },
                    {
                        title: `Triple contrainte`,
                        text: `Tout projet doit équilibrer le <strong>coût</strong>, le <strong>délai</strong> et la <strong>qualité</strong> (liée au périmètre). Agir sur l'un touche les autres : ajouter des fonctionnalités coûte généralement du temps ou de l'argent.<svg viewBox="0 0 300 165" width="300" role="img" aria-label="Triangle coût, délai, qualité"><polygon points="150,12 22,145 278,145" fill="#f1f6fc" stroke="#0056b3" stroke-width="2"/><text x="150" y="9" text-anchor="middle" font-size="13" fill="#0056b3" font-weight="bold">Qualité</text><text x="22" y="160" text-anchor="middle" font-size="13" fill="#0056b3" font-weight="bold">Coût</text><text x="278" y="160" text-anchor="middle" font-size="13" fill="#0056b3" font-weight="bold">Délai</text><text x="150" y="105" text-anchor="middle" font-size="12" fill="#333">Périmètre</text></svg><p><strong>Exemple :</strong> le client demande une fonctionnalité en plus. Pour garder la qualité, il faut soit plus de temps (délai), soit plus d'argent (coût), soit retirer autre chose (périmètre).</p>`
                    }
                ]
            }
        ]
    },
    {
        id: `acteurs`,
        part: `Le projet`,
        title: `Acteurs et organisation`,
        intro: `Qui participe au projet, et qui est responsable de quoi.`,
        groups: [
            {
                title: `Les personnes`,
                items: [
                    {
                        title: `Parties prenantes`,
                        text: `Personnes, groupes ou organisations (internes ou externes) qui participent au projet, peuvent influencer son déroulement ou sont concernées par ses résultats (en anglais : <em>stakeholders</em>).<br>Rôles principaux : le chef de projet, l'équipe de réalisation et les autres parties prenantes (client, sponsor, utilisateurs...).<p><strong>Exemple :</strong> client (le centre de formation), utilisateurs (formateurs, stagiaires), équipe de développement, fournisseur d'hébergement, direction qui finance.</p><p>Astuce : classez-les selon leur <strong>influence</strong> et leur <strong>intérêt</strong> pour savoir qui informer, consulter ou associer en priorité.</p>`
                    },
                    {
                        title: `Chef de projet`,
                        text: `Il planifie, coordonne l'équipe, suit l'avancement, gère les risques et communique avec les parties prenantes. Il répond de l'atteinte des objectifs.<p>Qualités attendues : organisation, communication, leadership, sens de la décision. Il fait le lien entre l'équipe, le client et la direction.</p>`
                    }
                ]
            },
            {
                title: `Les documents et outils`,
                items: [
                    {
                        title: `Charte de projet`,
                        text: `Document qui officialise l'existence du projet et en présente les informations principales :<ul><li>Objectifs</li><li>Périmètre</li><li>Responsables</li><li>Ressources</li><li>Délais</li><li>Contraintes</li><li>Principaux livrables</li></ul><p>Elle est rédigée au lancement du projet et validée par le commanditaire (le sponsor). Elle sert de référence en cas de désaccord sur ce qui a été décidé au départ.</p>`
                    },
                    {
                        title: `Matrice RACI`,
                        text: `Tableau qui répartit clairement les rôles et responsabilités des membres du projet pour chaque activité. RACI signifie :<ul><li><strong>R</strong> – Réalisateur (<em>Responsible</em>) : exécute la tâche</li><li><strong>A</strong> – Approbateur (<em>Accountable</em>) : valide et répond du résultat. Il n'y en a généralement qu'un par tâche</li><li><strong>C</strong> – Consulté (<em>Consulted</em>) : donne son avis avant ou pendant la tâche</li><li><strong>I</strong> – Informé (<em>Informed</em>) : est tenu au courant de l'avancement</li></ul><table class="kb"><tr><th>Activité</th><th>Chef de projet</th><th>Développeur</th><th>Client</th></tr><tr><td>Rédiger le cahier des charges</td><td>R</td><td>C</td><td>A</td></tr><tr><td>Développer l'application</td><td>A</td><td>R</td><td>I</td></tr><tr><td>Tester et valider</td><td>R</td><td>R</td><td>A</td></tr></table><p>Lecture : le client approuve (A) le cahier des charges rédigé par le chef de projet (R).</p>`
                    }
                ]
            }
        ]
    },
    {
        id: `besoin`,
        part: `Le projet`,
        title: `Du besoin au cahier des charges`,
        intro: `Première étape du projet : comprendre ce que le client attend.`,
        html: `<h3 class="group">Les étapes de l'analyse de besoin</h3> <ol><li>Identifier les besoins</li><li>Comprendre le contexte (QQOQCP)</li><li>Comparer et étudier le marché</li><li>Prendre une décision</li><li>Prioriser les besoins et les tâches</li><li>Formaliser les besoins</li></ol> <p>Un projet commence idéalement par l'expression d'un besoin, traduit ensuite en objectifs concrets. Le livrable de cette étape est le <strong>cahier des charges</strong>.</p>`,
        groups: [
            {
                title: `Notions clés`,
                items: [
                    {
                        title: `Analyse de besoin`,
                        text: `Étape essentielle qui consiste à identifier, comprendre, comparer (étude de marché), formaliser et prioriser les besoins et attentes des parties prenantes, internes comme externes, pour déterminer précisément ce que le projet doit réaliser. Son livrable est le cahier des charges.<p>Techniques pour recueillir les besoins : <strong>entretiens</strong>, <strong>questionnaires</strong>, <strong>observation</strong> du travail réel, <strong>ateliers</strong> avec les utilisateurs et analyse de l'existant.</p>`
                    },
                    {
                        title: `QQOQCP`,
                        text: `Grille de questions pour comprendre un contexte : <strong>Qui</strong> ? <strong>Quoi</strong> ? <strong>Où</strong> ? <strong>Quand</strong> ? <strong>Comment</strong> ? <strong>Pourquoi</strong> ? On y ajoute parfois « Combien ? ».<p><strong>Exemple :</strong> <ul><li>Qui ? les formateurs et le secrétariat</li><li>Quoi ? réserver des salles</li><li>Où ? depuis le site et le mobile</li><li>Quand ? dès la rentrée</li><li>Comment ? via une application web</li><li>Pourquoi ? éviter les doubles réservations</li></ul></p>`
                    },
                    {
                        title: `Cahier des charges`,
                        text: `Document qui décrit les attentes et les contraintes du client pour un projet. Il sert à bien comprendre ses besoins :<ul><li><strong>Besoin explicite</strong> : exprimé clairement par le client</li><li><strong>Besoin implicite</strong> : non formulé mais attendu. Il est mis en évidence avec les parties prenantes lors de l'analyse</li></ul><p><strong>Exemple :</strong> explicite : « je veux réserver une salle en ligne » ; implicite : « l'application doit fonctionner sur téléphone et rester rapide », car le client le considère évident sans le dire.</p><p>Contenu habituel : contexte, objectifs, périmètre, besoins fonctionnels (ce que fait l'application) et non fonctionnels (performance, sécurité), contraintes, délais, budget.</p>`
                    }
                ]
            }
        ]
    },
    {
        id: `cycle`,
        part: `Le projet`,
        title: `Cycle de vie et risques`,
        intro: `Les grandes étapes d'un projet et les risques qui peuvent survenir.`,
        html: `<h3 class="group">Les 6 étapes d'un projet</h3> <ol class="etapesList"><li>Analyse de besoin</li><li>Conception</li><li>Exécution</li><li>Test</li><li>Déploiement / Livraison</li><li>Maintenance</li></ol>`,
        groups: [
            {
                title: `Maîtriser les risques`,
                items: [
                    {
                        title: `Risque`,
                        text: `Événement incertain pouvant avoir un impact positif ou négatif sur les objectifs du projet (coût, délai, qualité, périmètre). Sa gravité se mesure en combinant sa <strong>probabilité</strong> d'occurrence et son <strong>impact</strong> s'il se produit. <br>Pour un projet informatique : <ul> <li><strong>Techniques</strong> : technologies, logiciels, infrastructure</li> <li><strong>Financiers</strong> : dépassement de budget, hausse imprévue des coûts</li> <li><strong>Délais</strong> : événements provoquant un retard</li> <li><strong>Humains / organisationnels</strong> : équipe, communication, organisation</li> <li><strong>Sécurité</strong> : menaces sur la confidentialité, l'intégrité ou la disponibilité des données</li> <li><strong>Juridiques / réglementaires</strong> : non-respect des lois, contrats ou obligations</li> </ul><p>On classe un risque selon sa probabilité et son impact :</p><table class="kb"> <tr><th></th><th>Impact faible</th><th>Impact moyen</th><th>Impact fort</th></tr> <tr><th>Probabilité forte</th><td style="background:#ffd54f">Moyen</td><td style="background:#ff8a65">Élevé</td><td style="background:#e57373">Critique</td></tr> <tr><th>Probabilité moyenne</th><td style="background:#aed581">Faible</td><td style="background:#ffd54f">Moyen</td><td style="background:#ff8a65">Élevé</td></tr> <tr><th>Probabilité faible</th><td style="background:#aed581">Faible</td><td style="background:#aed581">Faible</td><td style="background:#ffd54f">Moyen</td></tr> </table><p><strong>Exemple :</strong> « le développeur principal tombe malade » a une probabilité moyenne et un impact fort : risque élevé, à traiter.</p>`
                    }
                ]
            }
        ]
    },
    {
        id: `methods`,
        part: `Les méthodes`,
        title: `Méthodes de gestion de projet`,
        type: `methods`
    },
    {
        id: `agile`,
        part: `Les méthodes`,
        title: `Agilité et Scrum`,
        intro: `Les principes de l'agilité, puis le détail du cadre Scrum.`,
        groups: [
            {
                title: `Les fondements de l'agilité`,
                items: [
                    {
                        title: `Agilité`,
                        text: `Capacité à s'adapter rapidement aux changements, en livrant le produit par petites étapes et en tenant compte des retours à chaque étape.<p><strong>Exemple :</strong> au lieu de livrer toute l'application après 3 mois, on livre d'abord la réservation simple en 2 semaines. Les formateurs l'essaient, donnent leur avis, et on améliore.</p><p>Explication en arabe :</p><div class="vid"><iframe src="https://www.youtube.com/embed/N21o62V-ZoI" title="شرح منهجية الأجايل وإطار سكرام (en arabe)" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=N21o62V-ZoI" target="_blank" rel="noopener">شرح منهجية الأجايل وإطار سكرام (en arabe)</a>.</p><p>Pour approfondir : <a href="https://www.atlassian.com/fr/agile" target="_blank" rel="noopener">guide de l'agilité (Atlassian)</a>.</p>`
                    },
                    {
                        title: `Manifeste agile`,
                        text: `Publié en 2001, il affirme quatre valeurs (« plus que » ne veut pas dire que le second élément est inutile) :<ul><li>Les individus et leurs interactions plus que les processus et les outils</li><li>Des logiciels opérationnels plus qu'une documentation exhaustive</li><li>La collaboration avec les clients plus que la négociation contractuelle</li><li>L'adaptation au changement plus que le suivi d'un plan</li></ul><p>Il est complété par <strong>12 principes</strong>, par exemple livrer fréquemment, accueillir les changements et travailler chaque jour avec le client. Le texte complet est dans l'onglet Ressources.</p>`
                    }
                ]
            },
            {
                title: `Le cadre Scrum`,
                items: [
                    {
                        title: `Scrum : vue d'ensemble`,
                        text: `Scrum est un <strong>cadre de travail</strong> (<em>framework</em>) agile pour les projets complexes et changeants. Il améliore la performance de l'équipe et permet d'optimiser le produit grâce à des retours réguliers. Il repose sur trois piliers : la <strong>transparence</strong>, l'<strong>inspection</strong> et l'<strong>adaptation</strong>.<figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Scrum_Framework.png" alt="Schéma du cadre Scrum"><figcaption>Le cadre Scrum. Source : <a href="https://commons.wikimedia.org/wiki/File:Scrum_Framework.png" target="_blank" rel="noopener">Wikimedia Commons</a> (auteur et licence sur la page du fichier).</figcaption></figure><div class="flow"><span>Product Backlog</span>→<span>Sprint Planning</span>→<span>Sprint + Daily Scrum</span>→<span>Sprint Review</span>→<span>Sprint Retrospective</span>→<span>Incrément</span></div><div class="vid"><iframe src="https://www.youtube.com/embed/Hxj47ie_Flw" title="SCRUM : cours de 8 minutes" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=Hxj47ie_Flw" target="_blank" rel="noopener">SCRUM : cours de 8 minutes</a> (Scrum Life).</p><div class="vid"><iframe src="https://www.youtube.com/embed/2aO8igufiKY" title="C'est quoi Scrum ? Pourquoi ça marche ?" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=2aO8igufiKY" target="_blank" rel="noopener">C'est quoi Scrum ? Pourquoi ça marche ?</a> (Scrum Life).</p>`
                    },
                    {
                        title: `Les rôles Scrum`,
                        text: `Trois rôles forment la Scrum Team :<ul><li><strong>Scrum Master</strong> : facilitateur et garant du cadre Scrum. Il aide l'équipe à s'auto-organiser et lève les obstacles</li><li><strong>Product Owner</strong> : porte la vision du produit, gère et priorise le Product Backlog (fonctionnalités, User Stories)</li><li><strong>Développeurs</strong> : réalisent le produit</li></ul>Le Scrum Guide recommande une équipe de 10 personnes ou moins. Les parties prenantes (clients, sponsors, utilisateurs) ne sont pas un rôle Scrum mais interagissent avec l'équipe.<p><strong>Exemple :</strong> dans le projet de réservation, le directeur pédagogique est Product Owner, un formateur-développeur est Scrum Master, et trois développeurs forment l'équipe.</p>`
                    }
                ]
            },
            {
                title: `Les événements`,
                items: [
                    {
                        title: `Sprint`,
                        text: `Période de durée fixe, d'un mois maximum (en pratique 1 à 4 semaines), qui produit un incrément du produit. Un nouveau sprint démarre dès que le précédent se termine.<p><strong>Exemple :</strong> un sprint de 2 semaines avec l'objectif « permettre de réserver une salle ».</p>`
                    },
                    {
                        title: `Sprint Planning`,
                        text: `Réunion au début de chaque sprint (8 h maximum pour un sprint d'un mois, plus courte sinon). L'équipe définit :<ul><li>Pourquoi : l'objectif du sprint</li><li>Quoi : les éléments prioritaires du Product Backlog à réaliser</li><li>Comment : leur découpage en tâches</li></ul>Elle obtient ainsi le Sprint Backlog.<p><strong>Exemple :</strong> objectif : « réserver une salle ». Éléments retenus : formulaire, calendrier, confirmation par e-mail. Chaque élément est découpé en tâches de moins d'une journée.</p>`
                    },
                    {
                        title: `Daily Scrum`,
                        text: `Réunion quotidienne de 15 minutes maximum pour faire le point. Questions classiques :<ul><li>Qu'a-t-on fait hier ?</li><li>Quels problèmes a-t-on rencontrés ?</li><li>Que va-t-on faire aujourd'hui ?</li></ul><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Daily_sprint_meeting.jpg" alt="Mêlée quotidienne"><figcaption>Une mêlée quotidienne, souvent debout et courte. Source : <a href="https://commons.wikimedia.org/wiki/File:Daily_sprint_meeting.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (auteur et licence sur la page du fichier).</figcaption></figure><p>Ce n'est pas un compte rendu au chef : c'est un point de synchronisation entre développeurs pour réajuster le plan du jour.</p>`
                    },
                    {
                        title: `Sprint Review`,
                        text: `Réunion de fin de sprint où l'équipe présente l'incrément aux parties prenantes (dont le Product Owner). Les retours recueillis servent à ajuster le Product Backlog.<p><strong>Exemple :</strong> l'équipe montre la réservation en direct aux formateurs, qui demandent un filtre par capacité de salle : ce besoin est ajouté au backlog.</p>`
                    },
                    {
                        title: `Sprint Retrospective`,
                        text: `Dernière réunion du sprint : l'équipe examine sa façon de travailler (personnes, processus, outils) et décide des améliorations à appliquer au sprint suivant.<p><strong>Exemple :</strong> format simple « commencer / arrêter / continuer » : commencer les revues de code, arrêter les réunions trop longues, continuer la mêlée du matin.</p>`
                    }
                ]
            },
            {
                title: `Les artefacts`,
                items: [
                    {
                        title: `Product Backlog & Sprint Backlog`,
                        text: `<ul><li><strong>Product Backlog</strong> : liste ordonnée de tout ce qui est nécessaire au produit, gérée par le Product Owner</li><li><strong>Sprint Backlog</strong> : éléments choisis pour le sprint, plus le plan pour les réaliser</li></ul><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Scrum_task_board_example.jpg" alt="Tableau de tâches"><figcaption>Un tableau de sprint : tâches à faire, en cours, terminées. Source : <a href="https://commons.wikimedia.org/wiki/File:Scrum_task_board_example.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (auteur et licence sur la page du fichier).</figcaption></figure><p><strong>Exemple :</strong> Product Backlog : réserver, annuler, payer en ligne, notifier. Sprint Backlog : seulement « réserver » et ses tâches.</p>`
                    },
                    {
                        title: `User Story`,
                        text: `Besoin décrit du point de vue de l'utilisateur : « En tant que <em>rôle</em>, je veux <em>action</em> afin de <em>bénéfice</em> ». Elle alimente le Product Backlog.<p><strong>Exemple :</strong> « En tant que formateur, je veux réserver une salle afin d'organiser mon cours. » <br>Critères d'acceptation : je choisis une date, je vois les salles libres, je reçois une confirmation.</p><div class="vid"><iframe src="https://www.youtube.com/embed/anZcEIQlpoY" title="SCRUM, la méthode agile en 10 minutes" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=anZcEIQlpoY" target="_blank" rel="noopener">SCRUM, la méthode agile en 10 minutes</a>.</p>`
                    },
                    {
                        title: `Incrément`,
                        text: `Résultat concret et vérifiable d'un sprint. Il est réalisé par l'équipe, et chaque sprint doit en produire au moins un.<p><strong>Exemple :</strong> à la fin du sprint 1, la réservation fonctionne et peut être montrée au client, même si le reste n'existe pas encore.</p>`
                    }
                ]
            }
        ]
    },
    {
        id: `vente`,
        part: `Pour aller plus loin`,
        title: `Vente et marketing`,
        intro: `Comprendre le client et promouvoir un produit.`,
        groups: [
            {
                title: `Vendre`,
                items: [
                    {
                        title: `Art de la vente`,
                        text: `Il repose sur la relation avec le client :<ul><li>Comprendre son besoin : l'identifier, le clarifier, le comparer</li><li>Créer un climat favorable, adapté au client</li><li>Définir son persona</li><li>Pratiquer l'écoute active</li></ul><p>Étapes d'une vente : accueil, découverte du besoin, argumentation, traitement des objections, conclusion, suivi après-vente.</p>`
                    },
                    {
                        title: `Persona client`,
                        text: `Portrait type, semi-fictif, du client visé : âge, profession, objectifs, difficultés, habitudes d'achat...<p><strong>Exemple :</strong> Karim, 28 ans, gérant d'une petite boutique en ligne, veut gagner du temps et suit ses ventes sur son téléphone.</p>`
                    },
                    {
                        title: `Techniques de persuasion`,
                        text: `Il s'agit de repérer la motivation principale du client pour mieux l'orienter. La décision d'achat est influencée par des facteurs psychologiques, comme la rareté, la réciprocité et la preuve sociale.<ul><li><strong>Rareté</strong> : « plus que 3 places »</li><li><strong>Réciprocité</strong> : offrir un échantillon gratuit</li><li><strong>Preuve sociale</strong> : avis et témoignages de clients</li></ul>`
                    }
                ]
            },
            {
                title: `Promouvoir`,
                items: [
                    {
                        title: `Marketing fondamental`,
                        text: `Pratiques et stratégies visant à comprendre, anticiper et satisfaire les besoins des consommateurs. Il ne se limite pas à la vente ou à la publicité : il couvre aussi l'étude de marché, la création de valeur pour le client et sa fidélisation.<p>Il s'appuie sur le <strong>marketing mix</strong> (4P) : Produit, Prix, Place (distribution) et Promotion.</p>`
                    },
                    {
                        title: `Marketing digital`,
                        text: `Ensemble des techniques et des canaux numériques (site web, réseaux sociaux, e-mail, moteurs de recherche...) utilisés pour promouvoir un produit ou un service.<p>Canaux principaux : référencement naturel (SEO), réseaux sociaux, e-mailing, publicité en ligne et contenu (blog, vidéos).</p>`
                    }
                ]
            }
        ]
    },
    {
        id: `revision`,
        part: `Pour aller plus loin`,
        title: `Révision`,
        intro: `Un tableau pour retenir l'essentiel, avant de vous tester.`,
        html: `<h3 class="group">Prévisible ou agile ?</h3> <table class="kb"><tr><th></th><th>Prévisible</th><th>Agile</th></tr> <tr><td>Planification</td><td>Complète dès le départ</td><td>Progressive, à chaque itération</td></tr> <tr><td>Changements</td><td>Difficiles, coûteux</td><td>Bienvenus</td></tr> <tr><td>Livraison</td><td>À la fin du projet</td><td>À la fin de chaque itération</td></tr> <tr><td>Client</td><td>Surtout au début et à la fin</td><td>Impliqué en continu</td></tr> <tr><td>Convient quand</td><td>Les besoins sont stables</td><td>Les besoins évoluent</td></tr></table> <h3 class="group">Supports pour réviser le module</h3> <ul class="res"> <li><a href="https://olms.ofppt.ma/course/index.php?categoryid=1583" target="_blank" rel="noopener">Plateforme OLMS de l'OFPPT</a> : cours de la filière Développement Digital, option Web Full Stack (2e année).</li> <li><a href="https://ofppt.min.ma/2025/07/approche-agile-m202-developpement_10.html" target="_blank" rel="noopener">Fiche du module M202 « Approche agile »</a> : résumé, cours en PDF et vidéo (site d'étudiants, non officiel).</li> <li><a href="https://www.youtube.com/c/D%C3%A9veloppeurfullstack" target="_blank" rel="noopener">Chaîne « Développement Digital Darija »</a> : vidéos du programme en darija.</li> <li><a href="https://fr.slideshare.net/dohaflijastudent" target="_blank" rel="noopener">Supports « Approche agile » sur SlideShare</a> (non officiels, à comparer avec votre cours).</li> <li><a href="https://inkway.ma/formation/formation-professionnelle-maroc-methodologie-agile-scrum/" target="_blank" rel="noopener">Formation Agile et Scrum au Maroc</a> (Inkway) : plan de formation consultable en ligne.</li></ul> <h3 class="group">Quiz aléatoire</h3> <p class="intro">Bientôt disponible.</p>`
    },
    {
        id: `ressources`,
        part: `Pour aller plus loin`,
        title: `Ressources`,
        intro: `Uniquement les ressources utilisées dans ce site, avec leur source.`,
        html: `<h3 class="group">Vidéos</h3> <ul class="res"><li><a href="https://www.youtube.com/watch?v=Hxj47ie_Flw" target="_blank" rel="noopener">SCRUM : cours de 8 minutes</a> (Scrum Life). Utilisée dans : Agilité et Scrum.</li><li><a href="https://www.youtube.com/watch?v=2aO8igufiKY" target="_blank" rel="noopener">C'est quoi Scrum ? Pourquoi ça marche ?</a> (Scrum Life). Utilisée dans : Agilité et Scrum, Scrum : vue d'ensemble.</li><li><a href="https://www.youtube.com/watch?v=anZcEIQlpoY" target="_blank" rel="noopener">SCRUM, la méthode agile en 10 minutes</a>. Utilisée dans : Agilité et Scrum, User Story.</li><li><a href="https://www.youtube.com/watch?v=i2-WWbYJn_w" target="_blank" rel="noopener">Méthode Kanban : explication avec exemple</a>. Utilisée dans : Méthodes, Kanban.</li><li><a href="https://www.youtube.com/watch?v=N21o62V-ZoI" target="_blank" rel="noopener">شرح منهجية الأجايل وإطار سكرام (en arabe)</a>. Utilisée dans : Agilité et Scrum, Agilité.</li><li><a href="https://www.youtube.com/watch?v=IHauiJfKf0E" target="_blank" rel="noopener">C'est quoi la méthode de gestion de projet Agile/SCRUM ?</a>. Utilisée dans : Méthodes, Scrum.</li><li><a href="https://www.youtube.com/watch?v=PdKECeJa5HA" target="_blank" rel="noopener">Les méthodes agiles : tutoriel complet</a>. Utilisée dans : Méthodes, famille agile.</li><li><a href="https://www.youtube.com/watch?v=xPDEuPyPLOg" target="_blank" rel="noopener">Qu'est-ce que Kanban ? Introduction à Kanban</a>. Utilisée dans : Méthodes, Kanban.</li><li><a href="https://www.youtube.com/watch?v=L3FyIT7prMo" target="_blank" rel="noopener">Extreme Programming (XP), La Minute Agile 105</a>. Utilisée dans : Méthodes, XP.</li><li><a href="https://www.youtube.com/watch?v=K4dPbWcAgm0" target="_blank" rel="noopener">Le modèle en cascade</a>. Utilisée dans : Méthodes, cascade.</li><li><a href="https://www.youtube.com/watch?v=BZQTi4Hy7D0" target="_blank" rel="noopener">Le cycle en V, pilotage de projet</a>. Utilisée dans : Méthodes, cycle en V.</li><li><a href="https://www.youtube.com/watch?v=prTlaTBDH4M" target="_blank" rel="noopener">Waterfall ou cycle en V : comparaison</a>. Utilisée dans : Méthodes, famille prévisible.</li></ul> <p class="src">Le titre est celui de YouTube ; la chaîne n'est citée que lorsqu'elle est connue.</p> <h3 class="group">Images</h3> <ul class="res"> <li>Schéma du cadre Scrum, mêlée quotidienne et tableau de tâches : <a href="https://commons.wikimedia.org/wiki/Category:Scrum_(development)" target="_blank" rel="noopener">Wikimedia Commons</a> (auteur et licence sur la page de chaque fichier).</li> <li>Cycle en cascade : <a href="https://blog-gestion-de-projet.com" target="_blank" rel="noopener">blog-gestion-de-projet.com</a>.</li> <li>Cycle en V : <a href="https://www.manager-go.com" target="_blank" rel="noopener">Manager GO!</a>.</li> <li>Cycle en Y : <a href="https://collonvillethomas.wordpress.com" target="_blank" rel="noopener">collonvillethomas.wordpress.com</a>.</li> <li>Triangle, matrice des risques, matrice RACI et flux Scrum : créés pour ce site.</li></ul> <h3 class="group">Textes de référence</h3> <ul class="res"> <li><a href="https://agilemanifesto.org/iso/fr/manifesto.html" target="_blank" rel="noopener">Manifeste pour le développement Agile de logiciels</a>. Utilisé dans : Agilité et Scrum, Manifeste agile.</li> <li><a href="https://scrumguides.org/" target="_blank" rel="noopener">Scrum Guide</a>. Utilisé dans : Agilité et Scrum (rôles, événements, artefacts).</li> <li><a href="https://www.atlassian.com/fr/agile" target="_blank" rel="noopener">Guide de l'agilité</a> (Atlassian). Utilisé dans : Agilité et Scrum, Agilité.</li> <li><a href="https://www.atlassian.com/fr/agile/project-management/waterfall-methodology" target="_blank" rel="noopener">La méthode en cascade</a> (Atlassian). Utilisé dans : Méthodes, cascade.</li> <li><a href="https://www.manager-go.com/gestion-de-projet/cycle-en-v.htm" target="_blank" rel="noopener">Le cycle en V</a> (Manager GO!). Utilisé dans : Méthodes, cycle en V.</li> <li><a href="https://www.visual-planning.com/fr/blog/la-methode-de-gestion-de-projet-en-cascade" target="_blank" rel="noopener">La méthode en cascade</a> et <a href="https://www.visual-planning.com/fr/comprendre-la-gestion-de-projet/le-cycle-en-v-pour-votre-gestion-de-projet" target="_blank" rel="noopener">le cycle en V</a> (Visual Planning). Utilisés dans : Méthodes, cascade et cycle en V.</li> <h3 class="group">Supports du module</h3> <p>OLMS, fiche M202, chaîne « Développement Digital Darija », SlideShare et formation Inkway : utilisés dans le chapitre Révision.</p>`
    }
];

/* methods */
const families = [
    {
        id: `previsible`,
        title: `Méthodes Prévisibles / Traditionnelles`,
        intro: `Le projet est planifié en détail dès le départ et suit des phases bien définies.<div class="vid"><iframe src="https://www.youtube.com/embed/prTlaTBDH4M" title="Waterfall ou cycle en V : comparaison" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=prTlaTBDH4M" target="_blank" rel="noopener">Waterfall ou cycle en V : comparaison</a>.</p>`,
        methods: [
            {
                title: `Méthode Cycle en Cascade`,
                text: `Le cycle en cascade (<em>Waterfall</em>) est une approche linéaire et séquentielle : chaque phase doit être entièrement terminée avant de passer à la suivante.<p><strong>Avantages :</strong> simple, bien documentée, planning clair. <strong>Limites :</strong> les erreurs se découvrent tard, et un changement de besoin coûte cher.</p><p>Le modèle a été décrit par Royce en 1970.</p><div class="vid"><iframe src="https://www.youtube.com/embed/K4dPbWcAgm0" title="Le modèle en cascade" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=K4dPbWcAgm0" target="_blank" rel="noopener">Le modèle en cascade</a>.</p><p>Pour approfondir : <a href="https://www.visual-planning.com/fr/blog/la-methode-de-gestion-de-projet-en-cascade" target="_blank" rel="noopener">la méthode en cascade (Visual Planning)</a>. Selon cette source, la cascade ne permet pas de revenir aux étapes précédentes, alors que le cycle en V le permet.</p>`,
                img: `https://blog-gestion-de-projet.com/wp-content/uploads/2021/01/Modele-en-cascade-generique.png.webp`,
                link: `https://www.atlassian.com/fr/agile/project-management/waterfall-methodology`
            },
            {
                title: `Méthode Cycle en V`,
                text: `Le cycle en V est un modèle séquentiel qui associe chaque étape de conception (branche descendante) à une phase de test ou de validation correspondante (branche ascendante).<p><strong>Avantages :</strong> chaque étape de conception a son test associé, ce qui améliore la qualité. <strong>Limites :</strong> reste rigide face aux changements.</p><p>Exemple de correspondance : spécifications ↔ test de recette, conception ↔ tests d'intégration, code ↔ tests unitaires.</p><div class="vid"><iframe src="https://www.youtube.com/embed/BZQTi4Hy7D0" title="Le cycle en V, pilotage de projet" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=BZQTi4Hy7D0" target="_blank" rel="noopener">Le cycle en V, pilotage de projet</a>.</p><p>Pour approfondir : <a href="https://www.visual-planning.com/fr/comprendre-la-gestion-de-projet/le-cycle-en-v-pour-votre-gestion-de-projet" target="_blank" rel="noopener">le cycle en V (Visual Planning)</a>.</p>`,
                img: `https://www.manager-go.com/assets/Uploads/Cycle-V-min.png`,
                link: `https://www.manager-go.com/gestion-de-projet/cycle-en-v.htm`
            },
            {
                title: `Méthode Cycle en Y`,
                text: `Le cycle en Y sépare les aspects fonctionnels (le métier) des aspects techniques (l'architecture), développés en parallèle, puis les réunit lors de la conception et de la réalisation.<p>La branche fonctionnelle décrit <em>ce que</em> le système doit faire ; la branche technique décide <em>avec quoi</em> le construire. Elles se rejoignent à la conception.</p>`,
                img: `https://collonvillethomas.wordpress.com/wp-content/uploads/2020/04/4b0c6-processus2bfig2b2.11.png`
            }
        ]
    },
    {
        id: `imprevisible`,
        title: `Méthodes Imprévisibles / Agiles`,
        intro: `Le projet avance par itérations courtes et s'adapte aux changements.<div class="vid"><iframe src="https://www.youtube.com/embed/PdKECeJa5HA" title="Les méthodes agiles : tutoriel complet" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=PdKECeJa5HA" target="_blank" rel="noopener">Les méthodes agiles : tutoriel complet</a>.</p>`,
        methods: [
            {
                title: `Méthode Scrum`,
                text: `Scrum est un cadre agile où le travail est découpé en <strong>sprints</strong> de 1 à 4 semaines, rythmés par des réunions régulières (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective). Trois rôles : Scrum Master, Product Owner et développeurs. Chaque sprint livre un incrément du produit.<br><br>Pour le détail, voir l'onglet « Agilité &amp; Scrum ».<div class="vid"><iframe src="https://www.youtube.com/embed/IHauiJfKf0E" title="C'est quoi la méthode de gestion de projet Agile/SCRUM ?" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=IHauiJfKf0E" target="_blank" rel="noopener">C'est quoi la méthode de gestion de projet Agile/SCRUM ?</a>.</p><div class="flow"><span>Product Backlog</span>→<span>Sprint Planning</span>→<span>Sprint + Daily Scrum</span>→<span>Sprint Review</span>→<span>Sprint Retrospective</span>→<span>Incrément</span></div>`
            },
            {
                title: `Méthode Kanban`,
                text: `Kanban est une méthode visuelle de gestion des tâches. Elle permet de suivre le flux de travail du début à la fin et d'améliorer l'efficacité. Le travail est représenté sur un tableau en colonnes, et on limite le nombre de tâches « en cours » pour repérer les blocages. <table class="kb"><tr><th>À faire</th><th>En cours</th><th>Terminé</th></tr><tr><td>Tâche C</td><td>Tâche B</td><td>Tâche A</td></tr></table><p>Trois principes : <strong>visualiser</strong> le travail, <strong>limiter</strong> le travail en cours (WIP) et <strong>améliorer</strong> le flux en continu.</p><figure><img src="https://commons.wikimedia.org/wiki/Special:FilePath/Scrum_task_board_example.jpg" alt="Tableau de tâches"><figcaption>Un tableau de tâches, proche d'un tableau Kanban. Source : <a href="https://commons.wikimedia.org/wiki/File:Scrum_task_board_example.jpg" target="_blank" rel="noopener">Wikimedia Commons</a> (auteur et licence sur la page du fichier).</figcaption></figure><div class="vid"><iframe src="https://www.youtube.com/embed/xPDEuPyPLOg" title="Qu'est-ce que Kanban ? Introduction à Kanban" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=xPDEuPyPLOg" target="_blank" rel="noopener">Qu'est-ce que Kanban ? Introduction à Kanban</a>.</p><div class="vid"><iframe src="https://www.youtube.com/embed/i2-WWbYJn_w" title="Méthode Kanban : explication avec exemple" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=i2-WWbYJn_w" target="_blank" rel="noopener">Méthode Kanban : explication avec exemple</a>.</p>`
            },
            {
                title: `Méthode XP`,
                text: `La programmation extrême (XP, <em>Extreme Programming</em>) est une méthode agile de développement logiciel. Elle vise à améliorer la qualité du code et à s'adapter aux besoins changeants du client. <br><br><strong>Valeurs :</strong> communication, simplicité, feedback (retour d'information), courage et respect. <br><br><strong>Pratique clé :</strong> la programmation en binôme (<em>pair programming</em>) : deux développeurs travaillent ensemble sur le même poste. L'un écrit le code, l'autre le relit en continu. XP prévoit aussi des livraisons fréquentes.<p>Pratiques clés : programmation en binôme, petites livraisons fréquentes, client impliqué et conception simple.</p><div class="vid"><iframe src="https://www.youtube.com/embed/L3FyIT7prMo" title="Extreme Programming (XP), La Minute Agile 105" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div> <p class="src">Vidéo : <a href="https://www.youtube.com/watch?v=L3FyIT7prMo" target="_blank" rel="noopener">Extreme Programming (XP), La Minute Agile 105</a>.</p>`
            }
        ]
    }
];
