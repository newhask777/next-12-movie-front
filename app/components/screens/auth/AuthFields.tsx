import Field from '@/components/ui/form-elements/Field'
import { validEmail } from '@/shared/regex'
import {FC} from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'

interface IAuthFields {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean

}

const AuthFields:FC<IAuthFields> = ( { register, formState: {errors}, isPasswordRequired = false } ) => {
	return <>
			<Field {...register('email', 
				{
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter valid email!'
					}
				})
			} 
			placeholder='E-mail'
			error={errors.email as FieldError | undefined}
			/>
			<Field {...register('password', isPasswordRequired ? 
				{
					required: 'Password is required',
					minLength: {
						value: 6,
						message: 'Min length should more 6 symbols'
					}
				} : {} )
			} 
			placeholder='Password'
			type='password'
			error={errors.email as FieldError | undefined}
			/>
		</>
}

export default AuthFields