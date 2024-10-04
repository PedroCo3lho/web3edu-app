interface MotionButtonProps<T> {
  label: string;
  type: "button" | "submit" | "reset";
  className?: string;
  Icon?: React.ComponentType<{ className: string }> | string;
  func: (param: T) => T;
}

interface Kyc1Props<T> {
  setLevel: React.Dispatch<React.SetStateAction<string | undefined>>;
  level?: string;
}

interface TaskUnitsProps {
  text: string;
}

interface TrailsPageProps {
  image: JSX.Element;
  icon?: JSX.Element;
  title: string;
  description: string;
}
