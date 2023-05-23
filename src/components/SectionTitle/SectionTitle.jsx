const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mb-12 text-center">
      <p className="text-[#D99904] text-xl leading-6">{subHeading}</p>
      <h2 className="border-y-4 border-[#E8E8E8] py-4 px-14 mt-5 inline-block text-[40px] leading-[48px]  uppercase">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
