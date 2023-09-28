export function Alert({ message, color }) {
  const alertClass =
    color === "ok" ? "alert alert-success w-100 text-center " : "alert alert-danger w-100 text-center";
  return (
    <div className={alertClass} role="alert">
      {message}
    </div>
  );
}
