<template>
  <div class="flex justify-center p-4">
    <div class="min-lg:w-[1200px] w-full h-full bg-white p-5 flex flex-col gap-10 rounded-md border border-slate-200">
      <div class="flex flex-col gap-3">
        <h2>Notre histoire</h2>
        <hr>
        <div class="flex lg:flex-row flex-col gap-3">
          <div class="p-4 flex flex-col gap-4">
            <p class="indent-8">
              Créée en 2018 par <span class="font-extrabold text-pink-400"> Nora EDDELYMY</span>, CoopeIbilou est une coopération née au 
              cœur du village de <span class="font-extrabold text-pink-400">Timloukine</span>, situé dans la magnifique région 
              <span class="font-extrabold text-pink-400">d’Azilal</span>. 
              Cette initiative a vu le jour avec un objectif clair : regrouper les femmes 
              du village autour de leurs compétences artisanales pour améliorer leur 
              niveau de vie tout en valorisant un savoir-faire traditionnel.
            </p>

            <p class="indent-8">
              Au sein de la coopération, les femmes fabriquent avec passion des tapis
              traditionnels, des coussins artisanaux ainsi que des handiras, en utilisant
              exclusivement de la laine locale provenant des moutons du village.
              Chaque pièce est unique, confectionnée à la main selon des techniques
              ancestrales transmises de génération en génération.
            </p>
          </div>
          <div class="rounded-md h-[300px] bg-cover lg:px-70 px-20 bg-[url(@/assets/images/village.jpg)]">
          </div>
        </div>
        <div class="flex lg:flex-row flex-col gap-3">
          <!-- <div>
            <img src="@/assets/images/tapi.jpg"/>
          </div> -->
          <div class="rounded-md h-[400px] lg:h-[300px] lg:px-70 bg-cover px-20 bg-[url(@/assets/images/tapi.webp)]">
          </div>
          <div class="px-4 py-12 flex flex-col gap-4">
            <p class="indent-8">
              Pour teindre leurs créations, elles n'utilisent que <span class="font-extrabold text-pink-400">
              des matières naturelles</span>,
              comme <span class="font-extrabold text-pink-400">des fleurs spécifiques</span>
              et <span class="font-extrabold text-pink-400">
              des plantes locales</span>, respectueuses de 
              l’environnement et riches en couleurs authentiques. Le résultat ? 
              Des produits 100% traditionnels, durables, et d'une excellente qualité.
            </p>
            <p class="indent-8">
              En soutenant <span class="font-extrabold text-pink-400">CoopIbilou</span>, vous participez à la valorisation du travail des 
              femmes rurales, à la préservation du patrimoine culturel marocain et à un 
              développement local responsable.
            </p>
          </div>
        </div>
      </div>
      
      <div class="flex flex-col gap-3">
        <h2>Notre fondatrice</h2>
        <hr>
        <div class="p-4 flex flex-col gap-4">
          <p class="indent-8">
            <span class="font-extrabold text-pink-400">Nora Eddelymy</span> est une jeune 
            femme engagée, originaire du village de 
            Timloukine, dans la région d’Azilal. Titulaire d’une licence en Histoire, 
            elle travaille actuellement comme maîtresse des enfants dans sa communauté.
          </p>
          <p class="indent-8">
            Animée par un profond attachement à ses racines et aux femmes de son village,
            elle a fondé CoopeIbilou en 2018 avec une idée simple mais forte : 
            offrir aux femmes rurales un espace où elles peuvent valoriser leur 
            savoir-faire, se soutenir mutuellement et améliorer leur niveau de vie.
          </p>
          <p class="flex flex-col gap-2 border-l-2 border-l-blue-400 px-4 italic">
            <span class="font-extrabold text-gray-500">“Je crois en la force des femmes quand elles se rassemblent. À travers 
            CoopeIbilou, je veux préserver notre patrimoine, transmettre notre culture 
            artisanale, et créer des opportunités concrètes pour les femmes de mon 
            village.”</span>
            <span class="font-bold"> — Nora Eddelymy</span>
          </p>
        </div>
        
      </div>

      <div class="flex flex-col gap-3">
        <h2>Les femmes de la coopération</h2>
        <hr>
        <div class="p-4 flex flex-col gap-4">
          <p class="indent-8">
            Au cœur de CoopeIbilou, il y a les femmes de Timloukine : <span class="font-extrabold text-pink-400">
            des artisanes talentueuses</span>, <span class="font-extrabold text-pink-400">
            courageuses</span> et <span class="font-extrabold text-pink-400">
            passionnées</span>, qui mettent leur savoir-faire 
            au service d’un projet collectif. Issues de différentes générations, 
            elles partagent une même volonté : préserver leur patrimoine culturel 
            tout en améliorant leurs conditions de vie.
          </p>
          <p class="indent-8">
            La coopération est pour elles bien plus qu’un simple lieu de travail : 
            c’est un espace de solidarité, de transmission des savoirs, et de 
            valorisation des compétences de chacune.
          </p>
          <p class="flex flex-col gap-2 border-l-2 border-l-blue-400 px-4 italic">
            <span class="font-extrabold text-gray-500">“Grâce à la coopération, 
              je peux aider ma famille tout en continuant à pratiquer ce que ma mère 
              m’a appris.”</span>
            <span class="font-bold"> — Une artisane</span>
          </p>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <h2>Nos engagements</h2>
        <hr>
        <div class="grid pt-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    
          <div class="flex flex-col items-center gap-2 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div class="text-4xl">🧶</div>
            <h3 class="text-xl font-semibold">Fait main</h3>
            <p class="text-gray-600 text-sm">Chaque pièce est tissée avec soin, à la main, dans notre village.</p>
          </div>
        
          <div class="flex flex-col items-center gap-2 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div class="text-4xl">🌸</div>
            <h3 class="text-xl font-semibold">Naturel</h3>
            <p class="text-gray-600 text-sm">Teintures à base de fleurs et plantes locales, 100% naturelles.</p>
          </div>
        
          <div class="flex flex-col items-center gap-2 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div class="text-4xl">🤝</div>
            <h3 class="text-xl font-semibold">Solidaire</h3>
            <p class="text-gray-600 text-sm">Un projet porté par les femmes du village, pour les femmes.</p>
          </div>
        
          <div class="flex flex-col items-center gap-2 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div class="text-4xl">📍</div>
            <h3 class="text-xl font-semibold">Local</h3>
            <p class="text-gray-600 text-sm">Toutes nos créations sont produites à Timloukine, dans l’Atlas.</p>
          </div>
        
          <div class="flex flex-col items-center gap-2 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div class="text-4xl">🧵</div>
            <h3 class="text-xl font-semibold">Tradition</h3>
            <p class="text-gray-600 text-sm">Un artisanat préservé, transmis de génération en génération.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>