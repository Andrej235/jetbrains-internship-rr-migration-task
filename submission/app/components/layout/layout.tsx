import "./layout.scss";

type SectionProps = {
  children?: React.ReactNode;
  className: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={"kto-layout-section" + " " + className}>
      {children}
    </section>
  );
}

type ContainerProps = {
  children?: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
  return <div className="kto-layout-container">{children}</div>;
}
