   $(document).ready(function () {

       //            BLOCCO SCROLL ----------------------------------------------------------------------------------------------
       $("#titolo .conferma_iniziale").on("click", function () {
           $(".longer-div").animate({
               top: "-100vh"
           }, 500)
       })

       $("#paragrafo1 .conferma").on("click", function () {
           $(".longer-div").animate({
               top: "-200vh"
           }, 500)
       })



       //-------------------------------------

       $("#domanda3 .indietro img").on("click", function () {
           $(".longer-div").animate({
               top: "-100vh"
           }, 500)
       })


       $("#domanda1 .indietro img").on("click", function () {
           $(".longer-div").animate({
               top: "-200vh"
           }, 500)
       })


       $("#domanda2 .indietro img").on("click", function () {
           $(".longer-div").animate({
               top: "-300vh"
           }, 500)
       })

       //            /SLIDER SVAGO/LAVORO----------------------------------------------------------------------------------------------
       var slider = document.getElementById("myRange1");
       var attivaSlider = 0;
       var percentuale_svago = document.getElementById("studio_percentuale");
       var percentuale_studio = document.getElementById("svago_percentuale");
       percentuale_svago.innerHTML = slider.value;
       percentuale_studio.innerHTML = slider.value;

       slider.oninput = function () {
           percentuale_studio.innerHTML = this.value;
           percentuale_svago.innerHTML = (100 - this.value);

           $("#conferma_svago").css("opacity", "1");

           //--   SCROLL

           $("#domanda3 #conferma_svago").on("click", function () {
               //  console.log("Pulsante cliccato!!!!!");

               $(this).animate({
                   opacity: .2
               }, 50);

               $(".longer-div").animate({
                   top: "-300vh"
               }, 500)
           });


       }

       //PULSANTI ICONE DOMANDA 1----------------------------------------------------------------------------------------------
       // quando la pagina e' stata caricata:
       $(function () {

           $("#conferma_pulsanti").css({
               opacity: .5
           }, 50);

           var conta = 0;
           // questi due array associano gli id dei pulsanti ai nomi dei
           // corrispondenti file,nelle due versioni per i pulsanti accesi e spenti
           var pulsanti_accesi = {
               "pulsante-ecommerce": "images/icone/premute/ecommerce.svg",
               "pulsante-social": "images/icone/premute/social.svg",
               "pulsante-informazione": "images/icone/premute/informazione.svg",
               "pulsante-comunicazione": "images/icone/premute/comunicazione.svg",
               "pulsante-streaming": "images/icone/premute/streaming.svg",
               "pulsante-videochiamata": "images/icone/premute/videochiamata.svg"
           };
           var pulsanti_spenti = {
               "pulsante-ecommerce": "images/icone/non-premute/ecommerce.svg",
               "pulsante-social": "images/icone/non-premute/social.svg",
               "pulsante-informazione": "images/icone/non-premute/informazione.svg",
               "pulsante-comunicazione": "images/icone/non-premute/comunicazione.svg",
               "pulsante-streaming": "images/icone/non-premute/streaming.svg",
               "pulsante-videochiamata": "images/icone/non-premute/videochiamata.svg"
           };

           var elementiCliccati = [];

           $("li.pulsante").click(function () {
               // determina qual è il pulsante cliccato
               var pulsante_cliccato = $(this);

               // determina la sua ID
               var id_cliccato = pulsante_cliccato.attr("id");


               //Qui c'è la gestione del clicked or noot

               if ((pulsante_cliccato.hasClass("selezionato"))) {
                   //$(this).data("clicked", 1);
                   // toglie la classe CSS "selezionato"
                   conta = conta - 1;
                   pulsante_cliccato.removeClass("selezionato");

                   pulsante_cliccato.addClass("deselezionato");
                   // trova l'elemento IMG contenuto e gli cambia il SRC
                   // in modo da visualizzare l'immagine "spenta" corrispondente
                   pulsante_cliccato.find("img").attr("src", pulsanti_spenti[id_cliccato]);
                   console.log("oggetti selezionati = " + conta);

               } else if (conta < 3) {

                   // $(this).data("clicked", 0);
                   conta = conta + 1;
                   // aggiunge la classe CSS "selezionato"
                   pulsante_cliccato.addClass("selezionato");
                   // trova l'elemento IMG contenuto e gli cambia il SRC
                   // in modo da visualizzare l'immagine "accesa" corrispondente
                   pulsante_cliccato.find("img").attr("src", pulsanti_accesi[id_cliccato]);
               }
               if (conta == 3) {
                   // attiva conferma
                   $("#conferma_pulsanti").css({
                       opacity: 1
                   }, 50);

                   elementiCliccati = [];

                   $("#conferma_pulsanti").click(function () {
                       attiva_grafico(elementiCliccati);
                       console.log("Pulsante cliccato!!!!!")

                       $(".longer-div").animate({
                           top: "-400vh"
                       }, 500)
                       $("html").scrollTop(0);

                       $(this).animate({
                           opacity: .2
                       }, 50);

                   });

                   $("li.pulsante").each(function () {
                       if ($(this).hasClass("selezionato")) {
                           elementiCliccati.push($(this).data("nome"));
                           console.log(elementiCliccati);
                           //                                attiva_grafico(elementiCliccati);
                       }
                   })

               } else {
                   // disattiva conferma
                   $("#conferma_pulsanti").css({
                       opacity: .5
                   }, 50);
               }
           });

       });

       //SLIDER DOMANDA 2----------------------------------------------------------------------------------------------
       var oreMattina = 0;
       var orePomeriggio = 0;
       var oreSera = 0;

       var slidermattina = document.getElementById("slider2");
       var sliderpomeriggio = document.getElementById("slider3");
       var slidersera = document.getElementById("slider4");

       slidermattina.oninput = function () {
           oreMattina = parseInt(this.value);
           console.log("mattina:" + this.value);
           calcolo();

           if (oreMattina === 0) {

               $("text#mattina-ora-0").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#mattina-ora-0").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }

           if (oreMattina === 1) {

               $("text#mattina-ora-1").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#mattina-ora-1").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreMattina === 2) {

               $("text#mattina-ora-2").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#mattina-ora-2").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreMattina === 3) {

               $("text#mattina-ora-3").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#mattina-ora-3").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreMattina === 4) {

               $("text#mattina-ora-4").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#mattina-ora-4").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreMattina === 5) {

               $("text#mattina-ora-5").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#mattina-ora-5").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreMattina === 6) {

               $("text#mattina-ora-6").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#mattina-ora-6").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
       }

       sliderpomeriggio.oninput = function () {
           orePomeriggio = parseInt(this.value);
           console.log("pomeriggio:" + this.value);
           calcolo();

           if (orePomeriggio === 0) {

               $("text#pomeriggio-ora-0").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#pomeriggio-ora-0").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }

           if (orePomeriggio === 1) {

               $("text#pomeriggio-ora-1").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#pomeriggio-ora-1").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (orePomeriggio === 2) {

               $("text#pomeriggio-ora-2").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#pomeriggio-ora-2").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (orePomeriggio === 3) {

               $("text#pomeriggio-ora-3").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#pomeriggio-ora-3").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (orePomeriggio === 4) {

               $("text#pomeriggio-ora-4").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#pomeriggio-ora-4").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (orePomeriggio === 5) {

               $("text#pomeriggio-ora-5").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#pomeriggio-ora-5").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (orePomeriggio === 6) {

               $("text#pomeriggio-ora-6").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#pomeriggio-ora-6").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }

       }

       slidersera.oninput = function () {
           oreSera = parseInt(this.value);
           console.log("sera:" + this.value);
           calcolo();

           if (oreSera === 0) {

               $("text#sera-ora-0").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#sera-ora-0").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }

           if (oreSera === 1) {

               $("text#sera-ora-1").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#sera-ora-1").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreSera === 2) {

               $("text#sera-ora-2").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#sera-ora-2").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreSera === 3) {
               $("text#sera-ora-3").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#sera-ora-3").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreSera === 4) {

               $("text#sera-ora-4").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#sera-ora-4").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreSera === 5) {

               $("text#sera-ora-5").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#sera-ora-5").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }
           if (oreSera === 6) {

               $("text#sera-ora-6").animate({
                   opacity: 1,
                   easing: 'swing'
               }, 50);
           } else {
               $("text#sera-ora-6").animate({
                   opacity: .1,
                   easing: 'swing'
               }, 50);
           }

       }

       if ($("div.barra-numeri svg text") == oreMattina) {
           console.log("è lui!");
       }
       //console.log($("div.barra-numeri svg text"));

       var totale_ore;
       var consumo = 0;
       var dimensione_consumo;
       var dimensione_finale;
       var altezza_mattina;
       var altezza_pomeriggio;
       var altezza_sera;

       consumo = document.getElementById("numero_ore");
       consumo.innerHTML = calcolo.value;

       function calcolo() {
           totale_ore = parseInt(oreMattina) + parseInt(orePomeriggio) + parseInt(oreSera);
           consumo.innerHTML = (totale_ore * 115) / 1000;
           //console.log(consumo.innerHTML);
           dimensione_consumo = (18 * consumo.innerHTML) / 37843200; //dimensione sfera iniziale
           //console.log(dimensione_consumo);
           dimensione_finale = dimensione_consumo * 54800000;
           console.log(dimensione_finale);
           altezza_mattina = parseInt(oreMattina) * 58;
           altezza_pomeriggio = parseInt(orePomeriggio) * 58;
           altezza_sera = parseInt(oreSera) * 58;

           $("#conferma_ore").css("opacity", "1");

           $("#conferma_ore").click(function () {
               console.log("Pulsante cliccato!!!!!")

               $(".longer-div").animate({
                   top: "-500vh"
               }, 2000)
               $("html").scrollTop(0);

               $(this).animate({
                   opacity: .2
               }, 50);
           });
       }

       //WAYPOINTS GRAFICO ORE PERSONALIZZATI----------------------------------------------------------------------------------------------

       var controller = new ScrollMagic.Controller();

       var grafico_interattivo_pers = new Waypoint({
           element: document.getElementById('grafico_automatico'), //byId con l'id...

           handler: function () {
               //console.log("Hello world!");
               //scendi le barra
               $("#utente-mattina").css("transform", `translateY(${-(altezza_mattina)+1.5}px)`);

               $("#utente-pomeriggio").css("transform", `translateY(${-(altezza_pomeriggio)+1.5}px)`);

               $("#utente-sera").css("transform", `translateY(${-(altezza_sera)+1.5}px)`);


               $("#italiano-mattina").delay(0).animate({
                   height: 48.3
               }, 2000);

               $("#italiano-pomeriggio").delay(500).animate({
                   height: 108.3
               }, 2000);

               $("#italiano-sera").delay(1500).animate({
                   height: 125.6
               }, 2000);

               $("#utente-mattina").delay(0).animate({
                   height: altezza_mattina
               }, 2000);

               $("#utente-pomeriggio").delay(1000).animate({
                   height: altezza_pomeriggio
               }, 2000);

               $("#utente-sera").delay(2000).animate({
                   height: altezza_sera
               }, 2000);

           },
           offset: '60%'
       });




       //SFERE CHE SI GONFIANO----------------------------------------------------------------------------------------------
       var controller = new ScrollMagic.Controller();


       new ScrollMagic.Scene({
               triggerElement: "#chart",
               triggerHook: 'onLeave',
               duration: "300%"
           })
           .setPin("#chart", {
               pushFollowers: false
           })
        //   .addIndicators() // add indicators (requires plugin)
           .on("enter", function (e) {

               $(".bubble").css({
                   opacity: 1
               }, 50);

               $("#chart .bubble").css("transform", "scale(0.1)");
           })
           .addTo(controller);

       new ScrollMagic.Scene({
               triggerElement: "#caption-1",
               offset: "0",
               duration: "0.001%"
           })
           .setPin("#caption-1", {
               pushFollowers: true
           })
         //  .addIndicators() // add indicators (requires plugin)
           .addTo(controller);

       new ScrollMagic.Scene({
               triggerElement: "#caption-2",
               offset: "0",
               duration: "0.001%"
           })
           .setPin("#caption-2", {
               pushFollowers: true
           })
        //   .addIndicators() // add indicators (requires plugin)
           .addTo(controller);

       new ScrollMagic.Scene({
               triggerElement: "#caption-3",
               offset: "0",
               duration: "100px"
           })
           .setPin("#caption-3", {
               pushFollowers: true
           })
        //   .addIndicators() // add indicators (requires plugin)
           .on("enter", function risultato_finale() {
               console.log("dimensione sfera " + dimensione_finale);
               $("#chart .bubble").css("transform", "scale(" + dimensione_finale + ")");
           })
           .addTo(controller);


       //       //ZOOM SERVER----------------------------------------------------------------------------------------------
       // init

       var controller = new ScrollMagic.Controller();

       new ScrollMagic.Scene({
               triggerElement: "#server-container",
               triggerHook: 'onLeave',
               duration: "100%"
           })
           .setPin("#server-container", {
               pushFollowers: false
           })
      //     .addIndicators() // add indicators (requires plugin)

           .on("progress", function (e) {

               prog = e.progress.toFixed(2);


               $("#server-3").css("opacity", prog * 5);

           })
           .addTo(controller);

       //PULSANTI ICONE PARAGRAFO 3----------------------------------------------------------------------------------------------

       $("svg g polyline").animate({
           opacity: .2
       }, 10);

       // quando l'utente clicca su un pulsante...

       var bottoni_accesi = {
           "germania": "images/icone-picchi/germania.svg",
           "svizzera": "images/icone-picchi/svizzera.svg",
           "italia": "images/icone-picchi/italia.svg",
           "granbretagna": "images/icone-picchi/granbretagna.svg",
           "olanda": "images/icone-picchi/olanda.svg",
           "usa": "images/icone-picchi/usa.svg",
           "francia": "images/icone-picchi/francia.svg",
           "spagna": "images/icone-picchi/spagna.svg"
       };

       var bottoni_spenti = {
           "germania": "images/icone-picchi/deselezionato.svg",
           "svizzera": "images/icone-picchi/deselezionato.svg",
           "italia": "images/icone-picchi/deselezionato.svg",
           "granbretagna": "images/icone-picchi/deselezionato.svg",
           "olanda": "images/icone-picchi/deselezionato.svg",
           "usa": "images/icone-picchi/deselezionato.svg",
           "francia": "images/icone-picchi/deselezionato.svg",
           "spagna": "images/icone-picchi/deselezionato.svg"
       };

       

       $(".bottone").click(function () {
           id_cliccato = $(this).attr("id");
           console.log(id_cliccato);
           if ($(this).hasClass("selected")) {

               $(this).find("img").attr("src", bottoni_spenti[id_cliccato]);

               $(this).removeClass("selected");
               $("polyline#" + id_cliccato).animate({
                   opacity: .1,
                   easing: 'swing'
               }, 500);

           } else {
               $(this).addClass("selected");
               $(this).find("img").attr("src", bottoni_accesi[id_cliccato]);

               $("polyline#" + id_cliccato).animate({
                   opacity: 1,
                   easing: 'swing'
               }, 500);
               console.log("colora" + $("polyline#" + id_cliccato));
           }
       })
       $(".bottone").trigger( "click" );
       
       ;


       //GRAFICO SITI PREFERITI SELEZIONATI----------------------------------------------------------------------------------------------


       $("svg#grafico_siti g polyline").animate({
           opacity: 0
       }, 10);


       function attiva_grafico(nome) {


           for (i = 0; i <= nome.length; i++) {
               //                    $('img.nomi').hide()

               if (nome[i] === "social") {
                   //   console.log("sono qui social")
                   $("svg g#social polyline").animate({
                       opacity: 1,
                   }, 50);
                   $('img.nomi#nomi_social').show()

               } else if (nome[i] === "streaming") {
                   //  console.log("sono qui streaming")
                   $("svg g#streaming polyline").animate({
                       opacity: 1,

                   }, 50);
                   $('img.nomi#nomi_intrattenimento').show()
               } else if (nome[i] === "informazione") {
                   // console.log("sono qui informazione")
                   $("svg g#news polyline").animate({
                       opacity: 1,

                   }, 50);
                   $('img.nomi#nomi_news').show()
               } else if (nome[i] === "videochiamata") {
                   // console.log("sono qui videochiamata")
                   $("svg g#chiamate polyline").animate({
                       opacity: 1,

                   }, 50);
                   $('img.nomi#nomi_videocall').show()
               } else if (nome[i] === "comunicazione") {
                   // console.log("sono qui comunicazione")
                   $("svg g#chat polyline").animate({
                       opacity: 1,

                   }, 50);
                   $('img.nomi#nomi_chat').show()
               } else if (nome[i] === "e-commerce") {
                   // console.log("sono qui e-commerce")
                   $("svg g#acquisti polyline").animate({
                       opacity: 1,

                   }, 50);
                   $('img.nomi#nomi_acquisti').show()
               }
           }
       }

   }) // document ready ------------------------------------------
