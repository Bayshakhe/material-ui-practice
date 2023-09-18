
import * as yup from "yup";

const schema = yup.object({
    // personal information
    personalInformation: yup.object({
        firstName: yup.string().required("First name is required"),
        lastName: yup.string().required("Last name is required"),
        dateOfBirth: yup.date().required("Date of birth is required"),
        email: yup
            .string()
            .email("Please enter a valid email")
            .required("Email is required"),
        phone: yup
            .string()
            .required("Phone number is required")
            .min(11, "minimum you need to 11 digits number"),
    }),
    // address information
    addressInformation: yup.object({
        street: yup.string().required("Street is required"),
        city: yup.string().required("City is required"),
        state: yup.string().required("State is required"),
        zipCode: yup.string()
            .length(5, "ZipCode length must be 5 digit")
            .matches(/^[0-9]{5}/)
            .required("ZipCode is required"),
    }),
    // education information
    education: yup.array().of(
        yup.object({
            degree: yup.string().required("Degree is required"),
            graduationYear: yup.number().min(1900)
            .max(2023).required("Graduation year is required"),
            institution: yup.string().required("Institution is required"),
        })
    ),
    // cgpa
    cgpa: yup.array().of(
        yup.object({
            class_name: yup.string().required("Class name is required"),
            point: yup.number().min(0.1, 'CGPA must be at least 0.1')
            .max(5, 'CGPA must not exceed 5.0').required("Point is required"),
        })
    ),
    // employment history
    employmentHistory: yup.array().of(
        yup.object({
            company: yup.string().required("Company is required"),
            startDate: yup.date().required("Start date is required"),
            endDate: yup.date().required("End date is required"),
            position: yup.string().required("Position is required"),
        })
    ),
    // interests
    interests: yup.array().min(1).required("Minimum 1 interest have to select"),
    // additonal info
    additionalInfo: yup.object({
        referredBy: yup.string(),
        comments: yup.string(),
    }),
});

export default schema;