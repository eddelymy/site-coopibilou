<template>
  <div class="flex justify-center p-4">
    <div class="min-lg:w-[1200px] w-full h-full bg-white p-5 flex flex-col gap-10 rounded-md border border-slate-200">
      <tabs-component>
        <tab-component title="Récolte">
            <div class="grid grid-cols-2 gap-3 p-8">
              <div class="flex flex-col gap-4">
                <h2>Récolte de la laine:</h2>
                <p class="flex flex-col gap-3">
                  <span>
                    La fabrication de nos tapis commence au cœur des montagnes d’Azilal, 
                    avec la laine de moutons élevés dans les environs du village. Chaque 
                    année, pendant la saison de la tonte, la laine est soigneusement 
                    récoltée auprès des éleveurs locaux. Ce geste ancestral est effectué 
                    dans le respect des animaux, sans leur faire de mal.
                  </span>
                  <span>
                    La laine obtenue est douce, résistante et parfaitement adaptée à la 
                    fabrication artisanale. Elle représente une ressource naturelle 
                    précieuse, directement issue de notre environnement, et marque la 
                    première étape d’un processus de création 100 % local et traditionnel.
                  </span>
                </p>
              </div>
              <!-- <div class="h-[30px] w-full rounded-md bg-[url(@/assets/images/recolte.png)]">
                
              </div> -->
              <img src="@/assets/images/recolte.png" class="rounded-md"/>
            </div>
        </tab-component>
        <tab-component title="Lavage">
          <div class="grid grid-cols-2 gap-3 p-8">
            <div class="flex flex-col gap-4">
              <h2>Lavage et séchage:</h2>
              <p class="flex flex-col gap-3">
                <span>
                  Une fois la laine récoltée, elle est lavée à la main dans les rivières
                  pures qui traversent notre village. Cette méthode traditionnelle 
                  permet d’éliminer naturellement les impuretés, tout en préservant 
                  la qualité des fibres.
                </span>
                <span>
                  Après le lavage, la laine est soigneusement étendue au soleil pour 
                  sécher. Ce séchage naturel donne à la laine une douceur particulière 
                  et prépare parfaitement la matière pour les étapes suivantes du 
                  processus artisanal.
                </span>
              </p>
            </div>
            <img src="@/assets/images/reviere.jpg" class="rounded-md"/>
            <img src="@/assets/images/sechage.jpg" class="rounded-md"/>
          </div>
        </tab-component>
        <tab-component title="Filage">
          <div class="grid grid-cols-2 gap-3 p-8">
            <div class="flex flex-col gap-4">
              <h2>Filage de la laine:</h2>
              <p class="flex flex-col gap-3">
                <span>
                  Après le séchage, la laine propre est transformée en fils grâce à un 
                  filage entièrement manuel, réalisé par les femmes de la coopérative. 
                  Cette étape demande patience, savoir-faire et habileté.
                </span>
                <span>
                  En utilisant des techniques transmises de génération en génération, 
                  la laine est roulée et étirée pour former des fils solides, souples 
                  et homogènes. Ce travail minutieux est essentiel, car il garantit la 
                  qualité du tissage final.
                </span>
                <span>
                  Le fil ainsi obtenu est prêt à être teinté naturellement, ou 
                  directement utilisé selon le type de création envisagée.
                </span>
              </p>
            </div>
            <!-- <div class="h-[30px] w-full rounded-md bg-[url(@/assets/images/recolte.png)]">
              
            </div> -->
            <img src="@/assets/images/filage4.jpg" class="rounded-md"/>
          </div>
        </tab-component>
        <tab-component title="Teinture">
          <div class="grid grid-cols-2 gap-3 p-8">
            <div class="flex flex-col gap-4">
              <h2>Teinture naturelle:</h2>
              <p class="flex flex-col gap-3">
                <span>
                  Avant le tissage, les fils de laine sont teintés à la main avec des 
                  colorants 100 % naturels, issus de notre environnement. Les femmes 
                  de la coopérative utilisent des plantes locales, des fleurs sauvages, 
                  des racines ou encore des écorces pour obtenir des teintes riches, 
                  chaleureuses et durables.
                </span>
                <span>
                  Chaque couleur est le fruit d’un mélange précis, parfois secret, 
                  transmis par les anciennes du village. Le processus se fait sans 
                  produits chimiques, dans le respect de la nature et des traditions.
                </span>
                <span>
                  Grâce à ces teintures naturelles, chaque pièce devient unique, 
                  portant en elle les couleurs vivantes de notre terre.
                </span>
              </p>
            </div>
            <!-- <div class="h-[30px] w-full rounded-md bg-[url(@/assets/images/recolte.png)]">
              
            </div> -->
            <img src="@/assets/images/teinture-taine.webp" class="rounded-md"/>
          </div>
        </tab-component>
        <tab-component title="Tissage">
          <div class="grid grid-cols-2 gap-3 p-8">
            <div class="flex flex-col gap-4">
              <h2> Tissage à la main:</h2>
              <p class="flex flex-col gap-3">
                <span>
                  Le tissage est le cœur de notre savoir-faire. Une fois les fils prêts, 
                  les femmes de la coopérative s’installent devant leur métier à 
                  tisser, souvent en bois, pour donner vie aux motifs traditionnels.
                </span>
                <span>
                  Chaque tapis est tissé à la main, ligne par ligne, selon des 
                  techniques ancestrales. Le geste est lent, précis et demande de la 
                  patience, parfois plusieurs semaines de travail pour une seule pièce.
                </span>
                <span>
                  Les motifs sont souvent inspirés de la culture amazighe, et chaque 
                  dessin raconte une histoire : celle d’une femme, d’un village, ou 
                  d’un souvenir. Aucun tapis ne ressemble à un autre — chaque création 
                  est unique, faite avec soin et passion.
                </span>
              </p>
            </div>
            <img src="@/assets/images/tissage1.jpg" class="rounded-md"/>
          </div>
        </tab-component>
        <tab-component title="Finitions">
          <div class="grid grid-cols-2 gap-3 p-8">
            <div class="flex flex-col gap-4">
              <h2>Finitions et contrôle qualité:</h2>
              <p class="flex flex-col gap-3">
                <span>
                  Une fois le tissage terminé, le tapis est soigneusement détaché du 
                  métier à tisser. Vient alors l’étape des finitions, où chaque détail 
                  est vérifié : les bords sont égalisés, les fils superflus sont 
                  coupés, et les franges sont ajustées avec précision.
                </span>
                <span>
                  Les femmes inspectent minutieusement chaque tapis pour s’assurer 
                  de sa qualité, de sa solidité et de la perfection des motifs. 
                  Cette étape garantit que chaque pièce est prête à rejoindre un 
                  nouveau foyer, en portant fièrement les valeurs de la tradition, 
                  du travail bien fait et de l’élégance artisanale.
                </span>
                <span>
                  Chaque tapis quitte nos mains comme une œuvre d’art, authentique, 
                  unique et chargée d’histoire.
                </span>
              </p>
            </div>
            <img src="@/assets/images/finition.jpg" class="rounded-md"/>
          </div>
        </tab-component>
      </tabs-component>
    </div>
  </div>
</template>

<script setup>
import TabComponent from '@/components/common/TabComponent.vue';
import TabsComponent from '@/components/common/TabsComponent.vue';
</script>