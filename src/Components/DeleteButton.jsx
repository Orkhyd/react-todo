import { useLanguageContext } from "../Context/LanguageContext";

function DeleteButton(props) {
  const { t } = useLanguageContext();

  return (
    <button onClick={() => props.deleteAllTasks()}>{t("clearall")}</button>
  );
}

export default DeleteButton;
