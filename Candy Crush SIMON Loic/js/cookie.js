export default class Cookie {
  static urlsImagesNormales = [
    "./assets/images/Croissant@2x.png",
    "./assets/images/Cupcake@2x.png",
    "./assets/images/Danish@2x.png",
    "./assets/images/Donut@2x.png",
    "./assets/images/Macaroon@2x.png",
    "./assets/images/SugarCookie@2x.png",
  ];
  static urlsImagesSurlignees = [
    "./assets/images/Croissant-Highlighted@2x.png",
    "./assets/images/Cupcake-Highlighted@2x.png",
    "./assets/images/Danish-Highlighted@2x.png",
    "./assets/images/Donut-Highlighted@2x.png",
    "./assets/images/Macaroon-Highlighted@2x.png",
    "./assets/images/SugarCookie-Highlighted@2x.png",
  ];

  constructor(type, ligne, colonne) {
    // A FAIRE
    this.type = type;
    this.ligne = ligne;
    this.colonne = colonne;
    this.htmlImage = document.createElement("img");
    this.htmlImage.src = Cookie.urlsImagesNormales[type];
    this.htmlImage.width = 80;
    this.htmlImage.height = 80;
    // utilisation de la "dataset API" de HTML5 pour "attacher"
    // des attributs spécifiques à l'objet HTML créé
    this.htmlImage.dataset.ligne = ligne;
    this.htmlImage.dataset.colonne = colonne;
  }

  selectionnee() {
    // on change l'image et la classe CSS
    this.htmlImage.src = Cookie.urlsImagesSurlignees[this.type];
    // on zoome et on ajoute une ombre
    this.htmlImage.classList.add("cookies-selected");
  }

  deselectionnee() {
    // on change l'image et la classe CSS
    this.htmlImage.src = Cookie.urlsImagesNormales[this.type];
    // on supprime la classe CSS selectionnée
    this.htmlImage.classList.remove("cookies-selected");
  }
  


  static swapCookies(c1, c2) 
  {
    // avant de swapper, on regarde la distance
    //console.log("Distance = " + Cookie.distance(c1, c2));
    if (Cookie.distance(c1, c2) === 1) 
    {
      // On échange leurs images et types
      const imageSrcTmpc2 = c2.htmlImage.src;
      const typeTmpc2 = c2.type;

      c2.htmlImage.src = c1.htmlImage.src;
      c2.type = c1.type;

      c1.htmlImage.src = imageSrcTmpc2;
      c1.type = typeTmpc2;
      
      // Après avoir swapper 2 cookies on attend 200 ms (pour que le reste du code agisse) avant de voir si il faut les reswapper si il n'y a pas d'allignement ou si on laisse le swap
      setTimeout(function() 
      {
        // Le fait de mettre un "cookie cachee" retire le type "cookie-selected" donc on vérifie si nos 2 cookies ont encore cet aspect ou non
        if (c1.htmlImage.classList.contains("cookies-selected") && c2.htmlImage.classList.contains("cookies-selected"))
        {
          const imageSrcTmp = c2.htmlImage.src;
          const typeTmp = c2.type;
    
          c2.htmlImage.src = c1.htmlImage.src;
          c2.type = c1.type;
    
          c1.htmlImage.src = imageSrcTmp;
          c1.type = typeTmp;
  
          c1.deselectionnee();
          c2.deselectionnee();
    
        }

        else
        {
          c1.deselectionnee();
          c2.deselectionnee();
        }
      }, 200);
    }
  }

  // On cache les cookies et on retire le fait qu'ils soient "selected"
  cachee() 
  {
    this.htmlImage.classList.add("cookieCachee");
        // on change l'image et la classe CSS
    this.htmlImage.src = Cookie.urlsImagesNormales[this.type];
        // on supprime la classe CSS selectionnée
    this.htmlImage.classList.remove("cookies-selected");
  }

  /** renvoie la distance entre deux cookies */
  static distance(cookie1, cookie2) 
  {
    let l1 = cookie1.ligne;
    let c1 = cookie1.colonne;
    let l2 = cookie2.ligne;
    let c2 = cookie2.colonne;

    const distance = Math.sqrt((c2 - c1) * (c2 - c1) + (l2 - l1) * (l2 - l1));
    //console.log("Distance = " + distance);
    return distance;
  }

  // Reprend le même principe que le swap sauf que la méthode permet juste de faire bouger un cookie à la place de l'autre
  static remplacerCookies(c1, c2) 
  {
    // On échange leurs images et types
    const imageSrcTmp = c2.htmlImage.src;
    const typeTmp = c2.type;
    
    c2.htmlImage.src = c1.htmlImage.src;
    c2.type = c1.type;
    // et on les désélectionne
    c2.htmlImage.classList.remove("cookieCachee");
    c1.htmlImage.classList.add("cookieCachee");
  }
}
