# Pokemon

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7.

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Interview Instructions

- Please make sure to attempt each item listed below as some items may have more weight than others
- this interview is assessed based on:
  - critical thinking
  - optimized implementation
  - technical knowledge

### Angular & Typescript
1. Create a new service `TranslateService` inside `src/services`
2. The service should have exactly 2 methods:
   1. `getContent`: takes a string `lang` and retrieve the content for that language from `assets` directory
   2. `getValue`: takes a string `key` and returns its mapped value from the content
3. Create a new pipe `TranslatePipe` inside `src/pipes`
   1. The pipe should retrieve the value for the key provided from the service
4.  Configure the Angular application to do the following:
    1. Call `getContent` method **before** the application loads up, for when any page is rendered, the content should already be there.
    2. Whenever an HTTP request is made, log information about that request, specifically the request *method*, *url*, *success* & *time consumed in milliseconds*, e.g. `GET https://pokeapi.co/api/v2/pokemon?limit=10&offset=0 succeeded in 5ms`.
    3. Update the `getContent` method to not be included in that behavior.
5. Configure the `ListComponent` to do the following:
   1. Ensure the list/card/paginator should fill exactly half the width of the page
   2. Navigate to the last page, make sure the paginator should always stay in the same position below the list
   3. When an item is clicked, call the `getPokemonDetails` from `AppService` to retrieve its details
   4. The item details will populate the details card that shows right to the list
   5. A new css class with the name `selected` should be added to that item
   6. Switch `showAsModal` value to `true`
6. Configure the `CardComponent` to do the following:
   1. A new css class of `modal` should be added to the component dom when `showAsModal` is passed as `true`.
   2. The close icon `❌` should show up only in modal view and when pressed it should close the modal.
   3. When in modal mode, if any click is triggered outside the card, it should close the modal.
7. Configure the `InputComponent` to do the following:
   1. Using the proper Reactive Forms concepts of Angular, remove the `form` input completely
8. Configure the `DetailsComponent` to do the following:
   1. Navigate to page `3`, select `Arbok`, ensure a single line of text per ability, and the abilities not overflowing the card.
   2. Make use of the new `translate` pipe to display content properly.
   3. The `Back` button should show up only when you are in the details page.
9. Configure the `EditorComponent` to do the following:
   1. Make use of the new `translate` pipe to display content properly.
   2. The `Back` button should show up only when you are in the editor page.
   3. Prefill the form value with the details passed to the component.
   4. Make sure the `name` input is not being validated while the user is still typing
   5. Update the `crossFieldValidator` function to validate the fields only if the `name` field is valid.
   6. Display the abilities & types as inputs instead of regular text and make sure the add & delete buttons work properly.
10. Configure the application routing so that:
    1.  In `details` & `list` routes, if HTTP requests fail, it should redirect the UI to the `/error` page.
    2.  Add a new `list` route that can take a `pageNo` & `name` and loads the list along with the selected name.
