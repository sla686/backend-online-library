import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt";

export type UserRole = "customer" | "admin";

export interface UserDocument extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: UserRole;
  comparePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<UserDocument>({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (value: string) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      message: (props) => `${props.value} is not a valid password`,
    },
  },
  role: {
    type: String,
    enum: ["admin", "customer"],
  },
});

userSchema.pre<UserDocument>(
  "save",
  { document: true, query: false },
  async function (next) {
    if (this.isModified("password") || this.isNew) {
      try {
        this.password = await bcrypt.hash(this.password, 10);
        return next();
      } catch (e: any) {
        return next(e);
      }
    }
  }
);

userSchema.methods.comparePassword = async function (password: string) {
  return await bcrypt.compare(password, this.password);
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
const User = mongoose.model<UserDocument>("User", userSchema);
export default User;
