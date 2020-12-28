import { Component, OnDestroy, OnInit } from "@angular/core";
import { untilDestroyed } from "ngx-take-until-destroy";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"],
})
export class HeroesComponent implements OnInit, OnDestroy {
  trackerReset = "0";
  heroes: any[];
  itemForm: FormGroup;
  editedForm: FormGroup;
  error = "";
  isLoading = false;
  editingTracker = "0";

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formBuilderInit();
    this.fetchHeroes();
  }

  // this is needed in untilDestroyed
  ngOnDestroy(): void {}

  fetchHeroes() {

  }

  removeHero(id: string) {

  }

  onSave() {
    // stop here if form is invalid
    if (this.itemForm.invalid) {
      return;
    }

    this.itemForm.reset();
  }

  onUpdate() {
    // stop here if form is invalid
    if (this.editedForm.invalid) {
      return;
    }

    this.editingTracker = this.trackerReset;
  }

  async goToHeroDetail(id: string) {
    await this.router.navigateByUrl("/heroes/hero-detail/" + id);
  }

  private formBuilderInit(): void {
    this.itemForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(4)]],
      lastName: ["", [Validators.required, Validators.minLength(4)]],
      house: [""],
      knownAs: [""],
    });

    this.editedForm = this.fb.group({
      id: [""],
      firstName: ["", [Validators.required, Validators.minLength(4)]],
      lastName: ["", [Validators.required, Validators.minLength(4)]],
      house: [""],
      knownAs: [""],
    });
  }
}
