export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
      <div className="flex flex-col">
        <section className="py-6">{children}</section>

        <section className="flex gap-6">
          {team}
          {analytics}
        </section>
      </div>
  );
}
