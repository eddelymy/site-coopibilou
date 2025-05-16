export default class Validator {
  constructor(rules = {}) {
    this.rules = rules;
  }

  validate(formData, callback) {
    const emailPattern = new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$');
    for (const key in formData) {
      const rule = this.rules[key]
      let min = rule.find((el) => el.includes('min'))
      let max = rule.find((el) => el.includes('max'))

      if (rule.includes('required') && !formData[key]) {
        callback({[key]: 'Ce champ est obligatoire.'})
      }

      if (min && formData[key] && formData[key].length < min.split(':')[1]) {
        callback({[key]: `Ce champ doit avoir au minimun ${min.split(':')[1]} caractères.`})
      }

      if (max && formData[key] && formData[key].length > max.split(':')[1]) {
        callback({[key]: `Ce champ doit avoir au maximum ${max.split(':')[1]} caractères.`})
      }

      if (rule.includes('email') && !emailPattern.test(formData[key])) {
        callback({[key]: 'Veuillez saisir une adresse mail valide.'})
      }
    }
  }

  getRules() {
    return this.rules;
  }
}
