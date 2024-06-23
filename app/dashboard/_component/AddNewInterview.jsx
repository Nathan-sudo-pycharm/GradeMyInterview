"use client";
import { React, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExp, setJobExp] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExp);
  };
  return (
    <div>
      <div className="p-10 border rounded-lg bg-secondary-foreground  hover:scale-105 hover:shadow-md cursor-pointer transition-all">
        <h2
          className="font-bold text-lg text-center "
          onClick={() => setOpenDialog(true)}
        >
          + Add New{" "}
        </h2>
      </div>
      <Dialog open={openDialog}>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="bg-white    max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about your Job Interview
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h2>
                    Add details abt you job position / role , Job ddescription
                    and experience
                  </h2>
                  <div className="mt-7 my-3">
                    <label>Job Role</label>
                    <Input
                      placeholder="Full-Stack Developer"
                      className="rounded-xl"
                      required
                      onChange={(event) => setJobPosition(event.target.value)}
                    />
                  </div>
                  <div className="mt-3 my-3">
                    <label>Job Decription/Tech-stack</label>
                    <Textarea
                      placeholder="Type your tech-stack here. Example: React JS, Flutter etc."
                      className="rounded-xl"
                      required
                      onChange={(event) => setJobDesc(event.target.value)}
                    />
                  </div>
                  <div className="mt-3 my-3">
                    <label>Years of Experience</label>
                    <Input
                      placeholder="0 or More"
                      type="number"
                      className="rounded-xl"
                      required
                      max="60"
                      onChange={(event) => setJobExp(event.target.value)}
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end pt-2 ">
                  <Button
                    className="bg-red-700 text-white rounded-xl"
                    type="button"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="bg-black text-white rounded-xl"
                    type="submit"
                  >
                    Start Interview
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
