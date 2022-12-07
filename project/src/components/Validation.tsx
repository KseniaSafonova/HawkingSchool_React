import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    input1: string,
    input2: number,
};

const Validation = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("input1", { required: true })} />
                {errors.input1 && <span>This field is required</span>}
                <input {...register("input2", { required: true })} />
                {errors.input2 && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </>
    )
}

export default Validation;