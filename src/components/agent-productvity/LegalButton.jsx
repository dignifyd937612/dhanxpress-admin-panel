const LegalButton = ({ Icon, btn_txt, btn_color }) => {
  return (
    <>
      <button
        className={`flex items-center justify-center gap-2 rounded-lg ${btn_color} py-4 text-sm font-medium text-white`}
      >
        <Icon size={16} />
        {btn_txt}
      </button>
    </>
  );
};

export default LegalButton;
