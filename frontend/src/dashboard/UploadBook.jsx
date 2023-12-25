import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

const UploadBook = () => {
  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload a book</h2>
      <form className="flex max-w-md flex-col flex-wrap gap-4 lg:w-[1180px]">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="xyz@gmail.com" required />
      </div> 
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </div>
  );
};

export default UploadBook;
