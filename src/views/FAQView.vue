<template>
  <div class="flex justify-center flex-col items-center gap-4 p-4">
    <div class="min-lg:w-[1200px] w-full h-full bg-white p-5 flex flex-col gap-10 rounded-md border border-slate-200">
      <div class="flex flex-col gap-3">
        <h2>Fabrication artisanale</h2>
        <hr>
        <div class="flex lg:flex-row flex-col gap-3 px-4">
         <ul class="list-disc">
          <li>Combien de temps prend la fabrication d’un tapis/coussin ?</li>
            <p class=" italic text-gray-700">
              Nos tapis et coussins sont fabriqués à la main par des artisans 
              berbères. Le délai de fabrication peut varier entre 2 à 4 semaines, 
              selon le modèle et la complexité.
            </p>
          <li>Puis-je personnaliser un modèle ?</li>
            <p class=" italic text-gray-700">
              Oui, nous proposons la personnalisation (dimensions, couleurs, motifs). 
              Contactez-nous via le formulaire.
            </p>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h2>Livraison</h2>
        <hr>
        <div class="flex lg:flex-row flex-col gap-3 px-4">
         <ul class="list-disc">
          <li>Quels sont les délais de livraison ?</li>
            <p class=" italic text-gray-700">
              Une fois le produit fabriqué, la livraison prend généralement 5 à 10 
              jours ouvrés, selon votre pays.
            </p>
          <li>Dans quels pays livrez-vous ?</li>
            <p class=" italic text-gray-700">
              Nous livrons dans le monde entier.
            </p>
          <li>Combien coûte la livraison ?</li>
            <p class=" italic text-gray-700">
              Les frais de livraison sont calculés automatiquement lors du 
              passage de commande, selon votre pays et le poids de l’article.
            </p>
          </ul>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h2>Retour / échange</h2>
        <hr>
        <div class="flex lg:flex-row flex-col gap-3 px-4">
         <ul class="list-disc">
          <li>Puis-je retourner un article ?</li>
            <p class=" italic text-gray-700">
              Étant donné la nature artisanale et personnalisée de nos produits, 
              les retours ne sont acceptés que s’il y a un défaut de fabrication.
            </p>
          </ul>
        </div>
      </div>
    </div>
    <div class="min-lg:w-[1200px] overflow-auto w-full h-full bg-white p-5 flex flex-col gap-10 rounded-md border border-slate-200">
      <div class="w-full flex justify-center py-4">
        <span class="text-2xl font-extralight italic">
          À la recherche d’un tapis/Coussin/Handir  sur-mesure ?
        </span>
      </div>
      <div class="flex justify-between items-center">
        <div class="rounded-full bg-orange-200 p-4 w-1/6">
          <img src="@/assets/images/firstStep.svg" />
        </div>
        <hr class="border border-orange-200 w-full">
        <div class="rounded-full bg-orange-200 p-4 w-1/6">
          <img src="@/assets/images/2step.svg" />
        </div>
        <hr class="border border-orange-200 w-full">
        <div class="rounded-full bg-orange-200 p-4 w-1/6">
          <img src="@/assets/images/3step.svg" />
        </div>
        <hr class="border border-orange-200 w-full">
        <div class="rounded-full bg-orange-200 p-4 w-1/6">
          <img src="@/assets/images/4step.svg" />
        </div>
        <hr class="border border-orange-200 w-full">
        <div class="rounded-full bg-orange-200 p-4 w-1/6">
          <img src="@/assets/images/5step.svg" />
        </div>
        <hr class="border border-orange-200 w-full">
        <div class="rounded-full bg-orange-200 p-4 w-1/6">
          <img src="@/assets/images/6step.svg" />
        </div>
        
      </div>
      <div class="flex justify-between items-center">
        <div class="w-1/6">
          Vous configurez votre tapis/Coussin/Handir berbère 
        </div>
        <div class="w-1/6">
          L’artisan démarre la confection artisanale
        </div>
        <div class="w-1/6">
            On fait le suivi de la confection avec l’artisan
        </div>
        <div class="w-1/6">
          On réceptionne et on contrôle la qualité
        </div>
        <div class="w-1/6">
          Votre tapis est emballé et prêt à être livré
        </div>
        <div class="w-1/6">
          Vous recevez votre beau tapis chez vous !
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>