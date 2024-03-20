/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "fragment CartDetails on Cart {\n  id\n  items {\n    ...ItemDetails\n  }\n}": types.CartDetailsFragmentDoc,
    "fragment CategoryDetails on Category {\n  ...CategoryOnList\n  description\n  products {\n    ...ProductOnList\n  }\n}": types.CategoryDetailsFragmentDoc,
    "fragment CategoryOnList on Category {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}": types.CategoryOnListFragmentDoc,
    "fragment CollectionDetails on Collection {\n  ...CollectionOnList\n  description\n  products {\n    ...ProductOnList\n  }\n}": types.CollectionDetailsFragmentDoc,
    "fragment CollectionOnList on Collection {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}": types.CollectionOnListFragmentDoc,
    "fragment ItemDetails on Item {\n  id\n  product {\n    ...ProductOnList\n  }\n  quantity\n}": types.ItemDetailsFragmentDoc,
    "fragment ProductDetails on Product {\n  ...ProductOnList\n  description\n  colors {\n    id\n    name\n  }\n  sizes {\n    id\n    name\n  }\n  images(offset: 1) {\n    url\n    alt\n  }\n  reviews(orderBy: [{createdAt: DESC}]) {\n    ...ReviewDetails\n  }\n}": types.ProductDetailsFragmentDoc,
    "fragment ProductOnList on Product {\n  id\n  name\n  rating\n  categories {\n    name\n  }\n  coverImages: images(limit: 1) {\n    url\n    alt\n  }\n  price\n}": types.ProductOnListFragmentDoc,
    "fragment ReviewDetails on Review {\n  id\n  author\n  email\n  title\n  description\n  rating\n}": types.ReviewDetailsFragmentDoc,
    "mutation CartCreate($input: CartCreateInput) {\n  cartCreate(input: $input) {\n    cart {\n      id\n      email\n    }\n  }\n}": types.CartCreateDocument,
    "mutation ItemCreate($input: ItemCreateInput!) {\n  itemCreate(input: $input) {\n    item {\n      ...ItemDetails\n    }\n  }\n}": types.ItemCreateDocument,
    "mutation ItemDelete($id: ID!) {\n  itemDelete(id: $id) {\n    id\n    success\n  }\n}": types.ItemDeleteDocument,
    "mutation ItemUpdate($input: ItemUpdateInput!) {\n  itemUpdate(input: $input) {\n    item {\n      ...ItemDetails\n    }\n  }\n}": types.ItemUpdateDocument,
    "mutation OrderCreate($input: OrderCreateInput!) {\n  orderCreate(input: $input) {\n    order {\n      id\n    }\n  }\n}": types.OrderCreateDocument,
    "mutation ReviewCreate($input: ReviewCreateInput!) {\n  reviewCreate(input: $input) {\n    review {\n      ...ReviewDetails\n    }\n  }\n}": types.ReviewCreateDocument,
    "query CartGetItem($id: ID!) {\n  cart(id: $id) {\n    ...CartDetails\n  }\n}": types.CartGetItemDocument,
    "query CategoriesGetList($limit: Int, $offset: Int) {\n  categories(limit: $limit, offset: $offset) {\n    items {\n      ...CategoryOnList\n    }\n    totalCount\n  }\n}": types.CategoriesGetListDocument,
    "query CategoryGetItem($id: ID, $slug: String) {\n  category(id: $id, slug: $slug) {\n    ...CategoryDetails\n  }\n}": types.CategoryGetItemDocument,
    "query CollectionGetItem($id: ID, $slug: String) {\n  collection(id: $id, slug: $slug) {\n    ...CollectionDetails\n  }\n}": types.CollectionGetItemDocument,
    "query CollectionsGetList($limit: Int, $offset: Int) {\n  collections(limit: $limit, offset: $offset) {\n    items {\n      ...CollectionOnList\n    }\n    totalCount\n  }\n}": types.CollectionsGetListDocument,
    "query ItemGetUnique($cartId: ID!, $productId: ID!) {\n  item(cartId: $cartId, productId: $productId) {\n    ...ItemDetails\n  }\n}": types.ItemGetUniqueDocument,
    "query ProductGetItem($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}": types.ProductGetItemDocument,
    "query ProductsGetList($limit: Int, $offset: Int, $filter: ProductFilterInput, $orderBy: [ProductsOrderByInput!]) {\n  products(limit: $limit, offset: $offset, filter: $filter, orderBy: $orderBy) {\n    items {\n      ...ProductOnList\n    }\n    totalCount\n  }\n}": types.ProductsGetListDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CartDetails on Cart {\n  id\n  items {\n    ...ItemDetails\n  }\n}"): (typeof documents)["fragment CartDetails on Cart {\n  id\n  items {\n    ...ItemDetails\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryDetails on Category {\n  ...CategoryOnList\n  description\n  products {\n    ...ProductOnList\n  }\n}"): (typeof documents)["fragment CategoryDetails on Category {\n  ...CategoryOnList\n  description\n  products {\n    ...ProductOnList\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CategoryOnList on Category {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}"): (typeof documents)["fragment CategoryOnList on Category {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionDetails on Collection {\n  ...CollectionOnList\n  description\n  products {\n    ...ProductOnList\n  }\n}"): (typeof documents)["fragment CollectionDetails on Collection {\n  ...CollectionOnList\n  description\n  products {\n    ...ProductOnList\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment CollectionOnList on Collection {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}"): (typeof documents)["fragment CollectionOnList on Collection {\n  id\n  name\n  slug\n  image {\n    url\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ItemDetails on Item {\n  id\n  product {\n    ...ProductOnList\n  }\n  quantity\n}"): (typeof documents)["fragment ItemDetails on Item {\n  id\n  product {\n    ...ProductOnList\n  }\n  quantity\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductDetails on Product {\n  ...ProductOnList\n  description\n  colors {\n    id\n    name\n  }\n  sizes {\n    id\n    name\n  }\n  images(offset: 1) {\n    url\n    alt\n  }\n  reviews(orderBy: [{createdAt: DESC}]) {\n    ...ReviewDetails\n  }\n}"): (typeof documents)["fragment ProductDetails on Product {\n  ...ProductOnList\n  description\n  colors {\n    id\n    name\n  }\n  sizes {\n    id\n    name\n  }\n  images(offset: 1) {\n    url\n    alt\n  }\n  reviews(orderBy: [{createdAt: DESC}]) {\n    ...ReviewDetails\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductOnList on Product {\n  id\n  name\n  rating\n  categories {\n    name\n  }\n  coverImages: images(limit: 1) {\n    url\n    alt\n  }\n  price\n}"): (typeof documents)["fragment ProductOnList on Product {\n  id\n  name\n  rating\n  categories {\n    name\n  }\n  coverImages: images(limit: 1) {\n    url\n    alt\n  }\n  price\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ReviewDetails on Review {\n  id\n  author\n  email\n  title\n  description\n  rating\n}"): (typeof documents)["fragment ReviewDetails on Review {\n  id\n  author\n  email\n  title\n  description\n  rating\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CartCreate($input: CartCreateInput) {\n  cartCreate(input: $input) {\n    cart {\n      id\n      email\n    }\n  }\n}"): (typeof documents)["mutation CartCreate($input: CartCreateInput) {\n  cartCreate(input: $input) {\n    cart {\n      id\n      email\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ItemCreate($input: ItemCreateInput!) {\n  itemCreate(input: $input) {\n    item {\n      ...ItemDetails\n    }\n  }\n}"): (typeof documents)["mutation ItemCreate($input: ItemCreateInput!) {\n  itemCreate(input: $input) {\n    item {\n      ...ItemDetails\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ItemDelete($id: ID!) {\n  itemDelete(id: $id) {\n    id\n    success\n  }\n}"): (typeof documents)["mutation ItemDelete($id: ID!) {\n  itemDelete(id: $id) {\n    id\n    success\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ItemUpdate($input: ItemUpdateInput!) {\n  itemUpdate(input: $input) {\n    item {\n      ...ItemDetails\n    }\n  }\n}"): (typeof documents)["mutation ItemUpdate($input: ItemUpdateInput!) {\n  itemUpdate(input: $input) {\n    item {\n      ...ItemDetails\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation OrderCreate($input: OrderCreateInput!) {\n  orderCreate(input: $input) {\n    order {\n      id\n    }\n  }\n}"): (typeof documents)["mutation OrderCreate($input: OrderCreateInput!) {\n  orderCreate(input: $input) {\n    order {\n      id\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation ReviewCreate($input: ReviewCreateInput!) {\n  reviewCreate(input: $input) {\n    review {\n      ...ReviewDetails\n    }\n  }\n}"): (typeof documents)["mutation ReviewCreate($input: ReviewCreateInput!) {\n  reviewCreate(input: $input) {\n    review {\n      ...ReviewDetails\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CartGetItem($id: ID!) {\n  cart(id: $id) {\n    ...CartDetails\n  }\n}"): (typeof documents)["query CartGetItem($id: ID!) {\n  cart(id: $id) {\n    ...CartDetails\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoriesGetList($limit: Int, $offset: Int) {\n  categories(limit: $limit, offset: $offset) {\n    items {\n      ...CategoryOnList\n    }\n    totalCount\n  }\n}"): (typeof documents)["query CategoriesGetList($limit: Int, $offset: Int) {\n  categories(limit: $limit, offset: $offset) {\n    items {\n      ...CategoryOnList\n    }\n    totalCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CategoryGetItem($id: ID, $slug: String) {\n  category(id: $id, slug: $slug) {\n    ...CategoryDetails\n  }\n}"): (typeof documents)["query CategoryGetItem($id: ID, $slug: String) {\n  category(id: $id, slug: $slug) {\n    ...CategoryDetails\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetItem($id: ID, $slug: String) {\n  collection(id: $id, slug: $slug) {\n    ...CollectionDetails\n  }\n}"): (typeof documents)["query CollectionGetItem($id: ID, $slug: String) {\n  collection(id: $id, slug: $slug) {\n    ...CollectionDetails\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionsGetList($limit: Int, $offset: Int) {\n  collections(limit: $limit, offset: $offset) {\n    items {\n      ...CollectionOnList\n    }\n    totalCount\n  }\n}"): (typeof documents)["query CollectionsGetList($limit: Int, $offset: Int) {\n  collections(limit: $limit, offset: $offset) {\n    items {\n      ...CollectionOnList\n    }\n    totalCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ItemGetUnique($cartId: ID!, $productId: ID!) {\n  item(cartId: $cartId, productId: $productId) {\n    ...ItemDetails\n  }\n}"): (typeof documents)["query ItemGetUnique($cartId: ID!, $productId: ID!) {\n  item(cartId: $cartId, productId: $productId) {\n    ...ItemDetails\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductGetItem($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}"): (typeof documents)["query ProductGetItem($id: ID!) {\n  product(id: $id) {\n    ...ProductDetails\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query ProductsGetList($limit: Int, $offset: Int, $filter: ProductFilterInput, $orderBy: [ProductsOrderByInput!]) {\n  products(limit: $limit, offset: $offset, filter: $filter, orderBy: $orderBy) {\n    items {\n      ...ProductOnList\n    }\n    totalCount\n  }\n}"): (typeof documents)["query ProductsGetList($limit: Int, $offset: Int, $filter: ProductFilterInput, $orderBy: [ProductsOrderByInput!]) {\n  products(limit: $limit, offset: $offset, filter: $filter, orderBy: $orderBy) {\n    items {\n      ...ProductOnList\n    }\n    totalCount\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;