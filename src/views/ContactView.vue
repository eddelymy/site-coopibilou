<template>
  <div class="flex justify-center p-4">
    <div class="min-lg:w-[1200px] w-full h-full p-5 flex flex-col gap-7">

      <div class="grid lg:grid-cols-2 gap-2">
        <div class="border border-slate-100 rounded-md p-4 bg-white shadow">
          <h2 class="pb-2">Contactez-nous</h2>
          <hr>
          <form class="flex flex-col gap-3 pt-6" @submit.prevent="submit">
            <div class="grid grid-cols-2 gap-2">
              <div>
                <label>Nom</label>
                <input type="text" v-model="user.lastName"/>
                <span v-if="errors.lastName" class="error-message">{{ errors.lastName }}</span>

              </div>
              <div>
                <label>Prenom</label>
                <input type="text" v-model="user.firstName"/>
                <span v-if="errors.firstName" class="error-message">{{ errors.firstName }}</span>
              </div>
            </div>
            
            <div>
              <label>Email</label>
              <input type="email" v-model="user.email"/>
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            <div>
              <label>Message</label>
              <textarea v-model="user.msg"></textarea>
              <span v-if="errors.msg" class="error-message">{{ errors.msg }}</span>
            </div>
            <div class="flex justify-end">
              <button type="submit">Envoyer Message</button>
            </div>
            
          </form>
        </div>
        <div class="flex flex-col gap-2">
          <div class="border border-slate-100 rounded-md  p-4 bg-white shadow">
          <h2 class="pb-2">Nos coordonnées</h2>
          <hr>
          <div class="pt-10 grid grid-cols-2 gap-6">
            <div class="flex flex-col gap-2">
              <div class="flex gap-1 text-pink-600">
                <PhoneIcon class="w-4"/>
                <span class="font-bold">Telephone</span>
              </div>
              <span class="pl-10"> 06 61 23 45 67</span>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex gap-1 text-pink-600">
                <MapPinIcon class="w-4"/>
                <span class=" font-bold">Adresse</span>
              </div>
              <span class="pl-10"> Timloukine, Ait boulli, Azilal</span>
            </div>
            <div class="flex flex-col gap-2">
              <div class="flex gap-1 text-pink-600">
                <EnvelopeIcon class="w-4"/>
                <span class=" font-bold">Email</span>
              </div>
              <span class="pl-7"> eddelymyamina@gmail.com</span>
            </div>

          </div>
        </div>
        <div class="border border-slate-100 rounded-md  p-4 bg-white shadow">
          <h2 class="pb-2">Heures d'ouverture</h2>
          <hr>
          <div class="pt-10 flex justify-between">
            <div class="flex flex-col gap-2">
              <span class="font-bold text-pink-600">Lundi-Mardi</span>
              <span class="text-gray-600"> 08:00 - 18:00</span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="font-bold text-pink-600">Samedi</span>
              <span class="text-gray-600"> 10:00 - 16:00</span>
            </div>
            <div class="flex flex-col gap-2">
              <span class="font-bold text-pink-600">Dimanche</span>
              <span class="text-gray-600"> 14:00 - 18:00</span>
            </div>
          </div>
        </div>
        </div>
        
      </div>
      <div class=" h-[600px] bg-[url(@/assets/images/localisation.png)] bg-cover rounded-md shadow p-6">
        <!-- <img src="@/assets/images/localisation.png" class="w-full h-100" /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { PhoneIcon } from '@heroicons/vue/24/outline';
import { MapPinIcon } from '@heroicons/vue/24/outline';
import { EnvelopeIcon } from '@heroicons/vue/24/outline';
import Validator from '@/validation/validate';
import {ref} from 'vue'

const user = ref({})
const errors = ref({})

function validateData() {
  const rules = {
    lastName: ['required'],
    firstName: ['required'],
    email: ['required','email'],
    msg: ['required','min:10'],
    
  }

  const validator = new Validator(rules)

  validator.validate({
    lastName: user.value.lastName,
    firstName: user.value.firstName,
    email: user.value.email,
    msg: user.value.msg,
    
  }, (message) => {
    errors.value = message

    throw {
      response: {
        data: {
          message: 'Veuillez compléter les champs obligatoires svp'
        }
      }
    }
  })
}
function submit(){
  try{
    validateData()
    errors.value = {}
    user.value = {}
  }catch(error){
    const message = error?.response?.data?.message || 'Erreur! Veuillez réessayer plus tard!'
    flash(message,'error')
  }finally{

  }
}

</script>