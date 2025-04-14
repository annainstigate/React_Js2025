type BookAppointment = {
    appointemntId: number
    appointmentType: string
    patientData: PatientDemographic
    patientContacts: ContactInformation
    paymentMethod: Insurance | number
    appointmentReason: string
    appointmentDate: number | string
    doctor: DoctorData
    isExistingPatient: boolean
    appoinetmentStatus: string
    durationInMins: number
    languagePreference: string
    confirmationSent: boolean
    canBeCancelledByPatient: boolean
    paymentStatus: string
    bookedBy?: string
    notes?: string
    attachedFiles?: string[]

}

type PatientDemographic = {
    id: string | number
    firstName: string
    lastName: string
    dateOfBirth: string
}

type ContactInformation = {
    phone: number
    email: string
}

type Insurance = {
    providerId: number
    providerName: string
}

type DoctorData = {
    id: number | string
    fullName: string
    speciality: string
    raiting?: number
}

const virtualAppointemnt: BookAppointment = {
    appointemntId: 1225,
    appointmentType: 'virtual',
    patientData: {
        id: 125,
        firstName: 'Nune',
        lastName: 'Hayrapetyan',
        dateOfBirth: '2000-02-15'
    },
    patientContacts: {
        phone: 55152455412,
        email: 'nune_h@gmail.com'
    },
    paymentMethod: {
        providerId: 986,
        providerName: 'Davit'
    },
    appointmentReason: 'headache',
    appointmentDate: '2025-04-15',
    doctor: {
        id: 6555,
        fullName: 'Petros Petrosyan',
        speciality: 'family medicine'
    },
    isExistingPatient: false,
    appoinetmentStatus: 'scheduled',
    durationInMins: 45,
    languagePreference: 'Armenian',
    bookedBy: 'someone else',
    confirmationSent: true,
    canBeCancelledByPatient: true,
    paymentStatus: 'paid'
}

console.log(virtualAppointemnt)                                                                      

