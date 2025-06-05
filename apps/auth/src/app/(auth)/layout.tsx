export default function layout({ children }: { children: React.ReactNode }) {
  // This is a layout component that wraps around the children components.
  // You can add any common layout elements like headers, footers, or sidebars here.
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
