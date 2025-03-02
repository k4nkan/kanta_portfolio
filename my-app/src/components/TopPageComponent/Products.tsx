type ProductsProps = {
  title: string;
  img: string;
  text: string;
};

const Products: React.FC<ProductsProps> = ({ title, img, text }) => {
  return (
    <div className="flex flex-col w-full max-w-[600px] items-center p-4 gap-4 bg-slate-50 rounded-xl">
      <h3 className="text-2xl mt-2">{title}</h3>
      <div>
        <div className="max-w-[400px] w-full">
          <img src={img} alt="" />
        </div>
      </div>
      <p className="whitespace-pre-line max-w-[400px] w-full font-mono text-lg  max-sm:text-sm">{text} </p>
    </div>
  );
};

export default Products;
