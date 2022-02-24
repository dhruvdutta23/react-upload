
import {
  materialRenderers,
  materialCells,
} from '@jsonforms/material-renderers';
import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
//import ref from '@apidevtools/json-schema-ref-parser'

const soemvar="a";
const schema ={
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "items": {
        "type": "object",
        "title": "Users",
        "properties": {
          "firstname": {
            "type": "string"
          },
          "lastname": {
            "type": "string"
          },
          "email": {
            "type": "string",
            "format": "email"
          },
          "age": {
            "type": "number",
            "minimum": 0
          },
          "some":{
            "type":"string",
           
          }
        },
        "required": [
          "firstname"
        ]
      }
    }
  }
}


const uischema ={
  "type": "ListWithDetail",
  "scope": "#/properties/users",
  "options": {
    "detail": {
      "type": "VerticalLayout",
      "elements": [
        {
          "type": "HorizontalLayout",
          "elements": [
            {
              "type": "Control",
              "scope": "#/properties/firstname",
              "label": "First Name"
            },
            {
              "type": "Control",
              "scope": "#/properties/lastname",
              "label": "Last Name"
            }
          ]
        },
        {
          "type": "Control",
          "scope": "#/properties/age",
          "label": "Age"
        },
        {
          "type": "Control",
          "scope": "#/properties/email",
          "label": "Email"
        },
        {
          "type":"Control",
          "scope":"#/properties/firstname"
        }
      ]
    }
  }
} 

const initialData ={
  "users": [
    {
      "firstname": "Max",
      "lastname": "Mustermann",
      "age": 25,
      "email": "max@mustermann.com"
    }
  ]
} 
 
//ref.dereference(schema).then(()=>console.log("no error")).catch(()=>console.log("no error"))
function App() {
  const [data, setData] = useState(initialData);
  return (
    <div >
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={initialData }
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data, _errors }) => setData(data)}
      />
    </div>
  );
}

export default App;
