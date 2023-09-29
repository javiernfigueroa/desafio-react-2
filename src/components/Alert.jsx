export function Alert({ message, color }) {
  return (
    <div className={`alert w-100 text-center ${color}`} role="alert">
      {message}
    </div>
  );
}
