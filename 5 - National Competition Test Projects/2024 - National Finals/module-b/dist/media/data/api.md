# API

The API URL will be given to you on the day of the competition. Take note of this. It will be referred to as `{API_URL}` in this document.

The API returns JSON data. You should ensure that you request a sensible `Accepts` header, e.g., `application/json`.

## GET /results-by-member

> http://{API_URL}/results-by-member

Returns results grouped by member countries and regions.

### Request

#### Method

The accepted method is `GET`.

#### Parameters

The following parameters are supported:

| Parameter | Type    | Details                                                                                                             | Example Value |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------- | ------------- |
| `page`    | Integer | The page number being accessed.                                                                                     | 1             |
| `limit`   | Integer | The number of results to show per page.                                                                             | 10            |
| `search`  | String  | The search term to which results should be matched.                                                                 | United        |
| `sort`    | String  | The column by which results should be sorted. One of: `member`, `gold`, `silver`, `bronze`, `mfe`, or `total`.      | `member`      |
| `order`   | String  | The direction in which sorting should be applied. Requires `sort`. One of: `asc` (ascending) or `desc` (descending) | `asc`         |

### Response

The following properties are returned in the response:

| Property   | Type   | Details                                                                                                       |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------- |
| `results`  | Array  | A collection of member results object. Each object contains award counts and information for a single member. |
| `metadata` | Object | A set of data about the response for pagination purposes.                                                     |

An example response looks like the following:

```json
{
  "results": [
    {
      "id": 0,
      "awards": {
        "gold": 4,
        "silver": 14,
        "bronze": 18,
        "medallionForExcellence": 4
      },
      "member": {
        "name": "Argentina",
        "code": "AR"
      }
    }
  ],
  "metadata": {
    "currentPage": 1,
    "nextPage": 2,
    "previousPage": null,
    "limit": 1,
    "totalResults": 100,
    "totalPages": 100
  }
}
```
