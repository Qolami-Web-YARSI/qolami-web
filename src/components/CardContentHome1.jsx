const CardContentHome1 = (props) => {
  return (
    <>
      <div
        className="tw-flex tw-flex-col tw-pt-5 md:tw-pt-7 lg:tw-pt-10 tw-gap-5 tw-mx-5 tw-justify-between tw-bg-[#C2EF90] tw-rounded-[30px] 
            md:tw-rounded-none tw-font-poppins tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)] md:tw-shadow-none"
      >
        <div className="tw-flex tw-h-24 xl:tw-h-40 tw-px-5 sm:tw-px-0">
          <p
            className="tw-text-[28px] md:tw-text-[35px] xl:tw-text-[45px] 2xl:tw-text-[45px] tw-font-bold tw-text-center tw-text-[#009900]
                     tw-my-auto tw-mx-auto"
          >
            {props.judul}
          </p>
        </div>
        <img
          src={`${props.gambar}`}
          alt={`${props.gambar}`}
          className="tw-mx-auto tw-w-full tw-px-8 md:tw-px-0"
        />
      </div>
    </>
  );
};

export default CardContentHome1;
