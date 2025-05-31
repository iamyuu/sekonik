interface EmptyStateProps {
  title: string
  description: string
}

export function EmptyState(props: EmptyStateProps) {
  return (
    <div className="container mx-auto py-16 px-4 text-center space-y-2">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}
