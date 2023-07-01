import {useState ,useCallback} from 'react'
import Provider from "../../components/global/Provider"
import Input from '../../components/input/Input'
import {useForm}  from 'react-hook-form'
import {NavLink} from 'react-router-dom'



const SignUp = () => {


const [isLoading , setisLoading] = useState(false)

const { register, handleSubmit, formState: { errors } } = useForm({
  defaultValues:{
    email:'',
    password:'',
  }
})

const Authenticated = (data) => {
  setisAuth()
  // can be commented in future
  localStorage.setItem('token',JSON.stringify(data?.token))
}


const onSubmit = useCallback(async(data) => {
    // setisLoading to true
    setisLoading(prev => !prev)

        if(!data){
          toast.error('please fill fields')
          setisLoading(prev => !prev)
          return;
        }

        try {

          const apiLoggedData = {
            email:data?.email,
            password:data?.password,
          }
          //before pull checkout
          const loggedInData = await Postdata('/api/auth/login',apiLoggedData)

          if (loggedInData?.status === 201 || 200) {
             toast.success('Logged In succefully')
             Authenticated(loggedInData?.data)
             setisLoading(prev => !prev)
             router.push('/') 
          }else if(loggedInData?.response?.status === 401 ){
            setisLoading(false)
             toast.error(loggedInData?.response?.data?.message)
          }
  
        } catch (error) {
          toast.error(error?.response)
          setisLoading(prev => !prev)
        }
},[])


    


  return (
    <Provider label="SignUp">
      <div className="w-full h-full">

        {/* form field starts from here */}
        <div className="flex  flex-col justify-center">
          <div className=" flex flex-col justify-center w-full ">

            {/* form field starts */}
            <form className="space-y-6 " onSubmit={handleSubmit(onSubmit)}>
              <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                validation={{
                  required: "Email is required",
                  maxLength: {
                    value: 35,
                    message: "max char length 35",
                  },
                  minLength: {
                    value: 10,
                    message: "min char length 10",
                  },
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "This is not a valid Email",
                  },
                }}
                errorName={errors?.email}
              />

              <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                errorName={errors?.password}
                validation={{
                  required: "password is required",
                  maxLength: {
                    value: 10,
                    message: "max char length 10",
                  },
                  minLength: {
                    value: 8,
                    message: "min password length 8",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    message: "Password Should contain special symbols",
                  },
                }}
              />

              <div>
                <button
                  disabled={isLoading}
                  className={`flex w-full cursor-pointer justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 
    transition-all focus-visible:outline-offset-2 focus-visible:outline-secondary ${
      isLoading && "cursor-not-allowed"
    }`}
                >
                  Signup Now
                </button>
              </div>
            </form>

            <p className="mt-6 text-center text-sm text-gray-500">
              Already have an account &nbsp;
              <NavLink
                to="/SignUp"
                className={`font-semibold leading-6 cursor-pointer text-secondary hover:text-secondary ${
                  isLoading && "cursor-not-allowed"
                }`}
              >
                Login Now
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </Provider>
  )
}
export default SignUp
