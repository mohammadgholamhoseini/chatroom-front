import React from "react";
import {useForm} from "react-hook-form";

export const TextValidateInput = (props)=>{
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return(
        <div>
            <input
                type="text"
                id={props.id}
                placeholder={props.placeholder}
                className={errors[props.errorName] ? 'form-control border border-danger' : 'form-control'}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                {...register(props.errorName, { required: true })}
            />
            {errors[props.errorName] && <span className="text-danger">{props.errorDescription}</span>}
        </div>

    )
}