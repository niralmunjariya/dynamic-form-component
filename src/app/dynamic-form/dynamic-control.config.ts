export interface DynamicControlConfig {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  classes?: any;
  validate?: {
    required?: boolean;
    between?: {
      min: Number;
      max: Number;
    },
    min?: Number;
    max?: Number;
    minLength?: Number;
    maxLength?: Number;
  };
  properties?: any;
  options?: any;
  style?: any;
}
