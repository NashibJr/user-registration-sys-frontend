type IProps = {
  title?: string;
  paragraph?: string;
};

export default function withPage<T>(WrappedComponent: any) {
  return function NewComponent(props: IProps & T) {
    return (
      <div
        className="p-0 m-0 w-full h-screen"
        style={{
          backgroundImage: `url(${"/assets/images/backgroundImage.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 md:p-12 lg:p-20 xl:p-28 gap-5">
          <div
            className="text-white hidden md:flex flex-col gap-4 opacity-90 lg:pl-5 pt-10"
            style={{ textShadow: "2px 2px rgba(0, 0, 0, .8)" }}
          >
            <h2 className="font-bold text-4xl lg:text-6xl">{props.title}</h2>
            <p className="w-[300px] md:w-full">{props.paragraph}</p>
          </div>
          <WrappedComponent {...props} />
        </div>
      </div>
    );
  };
}
