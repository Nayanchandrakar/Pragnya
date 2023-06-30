const Container = ({
    children
}) => {
    return(
        <div className="max-w-[1500px] mx-auto px-5 sm:px-6 md:px-6 lg:px-8 xl:px-12">
            {children}
        </div>
    )
}
export default Container