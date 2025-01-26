export const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border border-gray-200 shadow-md ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="p-4">{children}</div>;
};
