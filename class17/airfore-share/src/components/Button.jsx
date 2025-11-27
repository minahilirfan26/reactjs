import './index.scss'

function MainBtn({ disabled, title, theme }) {
  // Define colors based on theme
  const colors = {
    light: {
      text: "#4a4a4a",
      border: "#4a4a4a",
      background:"transparent"
    },
    dark: {
      text: "#fff",
      border: "#fff",
      background:"transparent"

    },

  };

  const currentColors = colors[theme] || colors.light;

  return (
    <button
      className="main-btn"
      style={{
        backgroundColor:currentColors.background,
        color: disabled ? "rgba(186, 179, 179, 0.56)" : currentColors.text,
        border: disabled
          ? "1px solid rgba(186, 179, 179, 0.56)"
          : `1px solid ${currentColors.border}`,
      }}
      disabled={disabled}
    >
      {title}
    </button>
  );
}

export default MainBtn;
