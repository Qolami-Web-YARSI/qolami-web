const CardContentHome2 = (props) => {
  return (
    <>
      <div className="tw-flex tw-flex-col tw-justify-between tw-bg-[#009900] tw-rounded-[30px] tw-px-4 tw-py-5 tw-mx-5 tw-font-poppins tw-shadow-[0_4px_5px_0px_rgba(0,0,0,0.3)]">
        <p className="tw-text-[28px] md:tw-text-[23px] xl:tw-text-[37px] 2xl:tw-text-[40px] tw-font-bold tw-text-center tw-text-[#FFF6D9] tw-my-5 tw-mx-auto">
          {props.judul}
        </p>
        <img
          src={`${props.gambar}`}
          className="tw-mx-auto"
          alt={`${props.gambar}`}
        />
      </div>
    </>
  );
};

export default CardContentHome2;
