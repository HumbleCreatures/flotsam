export function Child({ child } : { child: { name: string } }) {
  return (
    <div>
      <h1>Child { child.name }</h1>
    </div>
  );
}
