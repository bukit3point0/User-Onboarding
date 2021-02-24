import * as yup from 'yup'

const confirmZionFighter = yup.object().shape({
    first_name: yup.string().trim()
        .required(`Nice try, Mr. Anderson`)
        .min(3, `You need a code name.`),
    email: yup.string().trim()
        .email(`We can't contact you by other means. They are watching.`)
        .required(`You have to tell us how to bring you back to Zion.`),
    password: yup.string()
        .required(`Make sure Mr. Anderson can't crack it.`)
        .min(8, `Make sure Mr. Anderson can't crack it.`),
    tos: yup.boolean()
        .required(["tos"], `Only Sentinels can't read this.`)
})

export default confirmZionFighter