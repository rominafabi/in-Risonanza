export function AuthTitle(data: any){
   return (
   <h1 className="font-semiBold text-center text-2xl md:text-3xl lg:text-4xl font-medium p-4 text-gray-700">
      {data.titleText}
   </h1>
)};

export default {
   AuthTitle,
}