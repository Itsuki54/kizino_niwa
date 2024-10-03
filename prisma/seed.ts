const { PrismaClient } = require("@prisma/client");
const db = new PrismaClient();
import { tags } from "@/data/tag";
import { tagsToBinary } from "@/utils/binary";

async function main() {
  const articles = [
    // 英語の記事
    {
      title: "Introduction to Prisma",
      content: `Prisma is an ORM that helps developers build scalable and maintainable applications. It abstracts the complexities of working with databases and provides a clean API for database access. With Prisma, you can define your database schema using a declarative syntax, and Prisma generates the database migrations and type-safe client automatically.

Prisma supports various databases including PostgreSQL, MySQL, SQLite, and SQL Server. It integrates well with modern JavaScript frameworks like Next.js and NestJS, making it a versatile choice for building full-stack applications. Prisma also includes a powerful query engine and a migration tool, making it easy to evolve your database schema over time.

One of the key features of Prisma is its ability to provide type safety for your database queries, reducing runtime errors and improving the developer experience. Prisma's ecosystem also includes Prisma Studio, a GUI for interacting with your database, and Prisma Migrate, a tool for managing schema changes.`,
      like: 10,
      userId: "sample-user-id",
    },
    {
      title: "Understanding JavaScript Closures",
      content: `A closure is the combination of a function and the lexical environment within which that function was declared. Closures are a fundamental concept in JavaScript, allowing for powerful and flexible code. They enable functions to access variables from an enclosing scope, even after that scope has finished executing.

Closures are often used for data encapsulation and creating function factories. For example, you can create private variables and functions that are only accessible within the closure, providing a way to implement module patterns. Additionally, closures are essential for callback functions and event handlers, where the function needs to maintain state between executions.

Another common use of closures is in functional programming techniques, such as currying and partial application, where functions are transformed to produce more specialized functions. Closures also play a crucial role in asynchronous programming, allowing asynchronous callbacks to access the scope in which they were created.`,
      like: 15,
      userId: "sample-user-id",
    },
    {
      title: "A Guide to React Hooks",
      content: `React Hooks are functions that let you use state and other React features without writing a class. Hooks provide a more direct API to the React concepts you already know, such as state, lifecycle, context, refs, and more.

The most commonly used hooks are useState, useEffect, and useContext. useState lets you add state to function components, useEffect lets you perform side effects in function components, and useContext provides a way to pass data through the component tree without having to pass props down manually at every level. Custom hooks allow you to encapsulate reusable logic, making your code more modular and easier to maintain.

Hooks also help in organizing and simplifying code that uses complex state logic. For example, the useReducer hook can manage more complex state interactions and state transitions, often used as an alternative to useState when dealing with more complex state logic. Hooks can also enhance performance by allowing you to optimize updates and avoid unnecessary renders with the useMemo and useCallback hooks.`,
      like: 20,
      userId: "sample-user-id",
    },
    {
      title: "Getting Started with TypeScript",
      content: `TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It offers static type checking at compile time, which helps catch errors early in the development process. This makes the development of large-scale applications more manageable and less error-prone.

TypeScript introduces type annotations, interfaces, and type inference, which provide a powerful way to describe the shapes and behaviors of objects in your code. This allows developers to understand and use code more effectively by providing clear contracts for functions and objects.

TypeScript also supports modern JavaScript features such as async/await, destructuring, and modules, while offering additional features like enums, generics, and namespaces. The TypeScript compiler can downlevel compile code to target specific versions of ECMAScript, ensuring compatibility with different environments.

Furthermore, TypeScript integrates seamlessly with popular libraries and frameworks such as React, Angular, and Node.js. It enhances IDE support with features like autocompletion, refactoring tools, and intelligent code navigation, making the developer experience more productive and enjoyable.`,
      like: 5,
      userId: "sample-user-id",
    },
    {
      title: "Building RESTful APIs with Node.js",
      content: `Learn how to build RESTful APIs using Node.js and Express. RESTful APIs are a way to provide interoperability between computer systems on the internet. They adhere to the constraints of REST architectural style and allow for interactions with RESTful web services.

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. With Express, you can set up middleware to respond to HTTP requests, define routing tables, and integrate with view rendering engines.

Building a RESTful API involves setting up endpoints to handle various HTTP methods (GET, POST, PUT, DELETE) and responding with appropriate status codes and data formats. You will also learn how to structure your application, manage different routes, and handle errors effectively.

Additionally, you can incorporate middleware for authentication, logging, and request validation, making your API more secure and reliable. Using tools like Postman for testing and MongoDB or PostgreSQL for data storage, you can build a complete, functional RESTful API that can be deployed and scaled.`,
      like: 8,
      userId: "sample-user-id",
    },
    {
      title: "Introduction to GraphQL",
      content: `GraphQL is a query language for your API and a server-side runtime for executing queries by using a type system you define for your data. Unlike REST, GraphQL allows clients to request exactly the data they need, making it more efficient and flexible.

GraphQL APIs are organized in terms of types and fields, not endpoints. This allows clients to query multiple resources in a single request and get a predictable response. GraphQL schemas define the structure of the API and include types, queries, mutations, and subscriptions.

With GraphQL, you can build powerful and flexible APIs that provide a single source of truth for your data. GraphQL servers can be implemented in various programming languages, and popular frameworks such as Apollo Server and GraphQL Yoga provide tools for building GraphQL APIs.

GraphQL also supports real-time updates through subscriptions, allowing clients to receive updates when data changes. This makes GraphQL a great choice for applications that require real-time features, such as chat applications or live dashboards.`,
      like: 12,
      userId: "sample-user-id",
    },
    {
      title: "Exploring Next.js",
      content: `Next.js is a React framework that enables several extra features, including server-side rendering and generating static websites. It is designed to improve the development experience and performance of React applications.

With Next.js, you can create dynamic routes, optimize images, and use API routes to build serverless functions. The framework also supports incremental static regeneration, which allows you to update static content after the initial build without needing to rebuild the entire site.

Next.js simplifies the process of creating SEO-friendly and fast websites. It offers features like automatic code splitting, which reduces the size of the initial page load, and built-in support for CSS and Sass, enabling you to style your applications easily.

Next.js also provides excellent developer experience with features like fast refresh, a file-based routing system, and a rich plugin ecosystem. Whether you are building a simple static site or a complex application, Next.js provides the tools and flexibility you need.`,
      like: 7,
      userId: "sample-user-id",
    },
    {
      title: "A Deep Dive into Docker",
      content: `Docker is a set of platform-as-a-service products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated environments that contain everything needed to run an application, making it easy to move and run software across different environments.

Docker enables developers to package applications with all of their dependencies into a standardized unit for software development. This containerization ensures that applications run consistently regardless of where they are deployed, whether on a local machine, in a data center, or in the cloud.

Using Docker, you can create multi-container applications with tools like Docker Compose, which allows you to define and run multi-container Docker applications. Docker Swarm and Kubernetes can be used to orchestrate and manage containerized applications at scale.

Docker also enhances development workflows by providing development environments that are consistent with production. This reduces the "works on my machine" problem and simplifies the CI/CD process, enabling faster and more reliable deployments.`,
      like: 11,
      userId: "sample-user-id",
    },
    {
      title: "Introduction to Kubernetes",
      content: `Kubernetes is an open-source container orchestration system for automating computer application deployment, scaling, and management. It groups containers that make up an application into logical units for easy management and discovery.

Kubernetes provides a framework to run distributed systems resiliently. It takes care of scaling and failover for your application, provides deployment patterns, and can manage the lifecycle of containers. Kubernetes also offers a powerful API that allows you to define and manage your applications declaratively.

Kubernetes supports various container runtimes, including Docker, containerd, and CRI-O. It also provides built-in tools for load balancing, secret and configuration management, storage orchestration, and more.

With Kubernetes, you can deploy applications consistently across different environments, ensuring high availability and scalability. It integrates well with cloud providers like AWS, GCP, and Azure, making it a key component of modern cloud-native applications.`,
      like: 14,
      userId: "sample-user-id",
    },
    {
      title: "Understanding Asynchronous JavaScript",
      content: `Asynchronous JavaScript, or JavaScript that uses callbacks, promises, and async/await, is a powerful tool for managing asynchronous operations. Asynchronous programming is essential for tasks that take time to complete, such as network requests, file reading/writing, and timers.

Callbacks are functions passed as arguments to other functions, which are executed once an asynchronous operation completes. However, they can lead to callback hell, making the code difficult to read and maintain.

Promises provide a more structured way to handle asynchronous operations, representing a value that may be available now, or in the future, or never. They have methods like then, catch, and finally to handle the completion, failure, and cleanup of asynchronous operations.

Async/await, introduced in ES2017, is built on promises and allows writing asynchronous code that looks synchronous, making it easier to read and understand. It uses the async keyword to declare asynchronous functions and the await keyword to pause execution until the promise is resolved.

Using these tools, developers can write more efficient, readable, and maintainable asynchronous code, improving the performance and responsiveness of their applications.`,
      like: 9,
      userId: "sample-user-id",
    },
    // 日本語の記事
    {
      title: "Prisma入門",
      content: `Prismaは、開発者がスケーラブルで保守可能なアプリケーションを構築するのを助けるORMです。データベースの操作を抽象化し、クリーンなAPIを提供します。Prismaを使用すると、宣言型の構文を使用してデータベーススキーマを定義でき、Prismaは自動的にデータベースマイグレーションと型安全なクライアントを生成します。

Prismaは、PostgreSQL、MySQL、SQLite、SQL Serverなどのさまざまなデータベースをサポートしています。Next.jsやNestJSなどのモダンなJavaScriptフレームワークともよく統合されており、フルスタックアプリケーションの構築に適した選択肢です。Prismaには強力なクエリエンジンとマイグレーションツールも含まれており、時間の経過とともにデータベーススキーマを進化させるのが容易です。

Prismaの主な機能の1つは、データベースクエリの型安全性を提供し、ランタイムエラーを減らし、開発者のエクスペリエンスを向上させることです。Prismaのエコシステムには、データベースとの対話のためのGUIであるPrisma Studioや、スキーマ変更を管理するためのツールであるPrisma Migrateも含まれています。`,
      like: 10,
      userId: "sample-user-id",
    },
    {
      title: "JavaScriptクロージャの理解",
      content: `クロージャは、関数とその関数が宣言されたレキシカル環境の組み合わせです。クロージャはJavaScriptの基本概念であり、強力で柔軟なコードを書くためのものです。クロージャは、関数が終了した後でも、その関数が宣言されたスコープの変数にアクセスできるようにします。

クロージャは、データのカプセル化や関数ファクトリの作成にしばしば使用されます。例えば、クロージャ内でのみアクセス可能なプライベート変数や関数を作成し、モジュールパターンを実装する方法を提供します。また、コールバック関数やイベントハンドラなど、関数が実行される間に状態を保持する必要がある場合にもクロージャは不可欠です。

クロージャのもう一つの一般的な使用方法は、カリー化や部分適用などの関数型プログラミング技法です。これにより、関数を変換してより専門化された関数を生成できます。クロージャは非同期プログラミングにおいても重要な役割を果たし、非同期コールバックが作成されたスコープにアクセスできるようにします。`,
      like: 15,
      userId: "sample-user-id",
    },
    {
      title: "Reactフックガイド",
      content: `React Hooksは、クラスを記述せずに状態やその他のReact機能を使用できるようにする関数です。Hooksは、状態、ライフサイクル、コンテキスト、参照などのReactの概念に直接アクセスできるAPIを提供します。

最も一般的に使用されるHooksはuseState、useEffect、useContextです。useStateは関数コンポーネントに状態を追加し、useEffectは関数コンポーネントで副作用を実行し、useContextは手動で各レベルにプロップを渡さずにデータをコンポーネントツリーに渡す方法を提供します。カスタムフックを使用すると、再利用可能なロジックをカプセル化し、コードをよりモジュール化し、保守しやすくします。

Hooksはまた、複雑な状態ロジックを使用するコードを整理し、単純化するのに役立ちます。例えば、useReducerフックは、複雑な状態の相互作用や状態遷移を管理することができ、より複雑な状態ロジックを扱う際にはuseStateの代替としてよく使用されます。Hooksはまた、useMemoやuseCallbackフックを使用して更新を最適化し、不必要なレンダリングを回避することでパフォーマンスを向上させることができます。`,
      like: 20,
      userId: "sample-user-id",
    },
    {
      title: "TypeScriptの始め方",
      content: `TypeScriptは、JavaScriptの型付きスーパーセットであり、プレーンなJavaScriptにコンパイルされます。これにより、開発プロセスの早い段階でエラーを検出し、大規模なアプリケーションの開発をより管理しやすく、エラープローンなものにします。

TypeScriptは、型注釈、インターフェース、および型推論を導入し、オブジェクトの形状と動作を強力に記述する方法を提供します。これにより、関数やオブジェクトのための明確な契約を提供することで、開発者がコードをより効果的に理解し、使用することができます。

TypeScriptは、async/await、分割代入、モジュールなどのモダンなJavaScript機能をサポートし、さらに列挙型、ジェネリック、および名前空間などの追加機能も提供します。TypeScriptコンパイラは、特定のECMAScriptバージョンをターゲットにしたコードにダウンレベルコンパイルすることができ、さまざまな環境との互換性を確保します。

さらに、TypeScriptはReact、Angular、Node.jsなどの人気ライブラリやフレームワークとシームレスに統合され、オートコンプリート、リファクタリングツール、インテリジェントコードナビゲーションなどの機能を備えたIDEサポートを強化し、開発者のエクスペリエンスを向上させます。`,
      like: 5,
      userId: "sample-user-id",
    },
    {
      title: "Node.jsでのRESTful API構築",
      content: `Node.jsとExpressを使用してRESTful APIを構築する方法を学びます。RESTful APIは、インターネット上のコンピュータシステム間の相互運用性を提供する方法です。RESTアーキテクチャスタイルの制約に従い、RESTfulウェブサービスとの対話を可能にします。

Expressは、Webおよびモバイルアプリケーションを構築するための堅牢な機能セットを提供する、最小限で柔軟なNode.js Webアプリケーションフレームワークです。Expressを使用すると、HTTPリクエストに応答するためのミドルウェアを設定し、ルーティングテーブルを定義し、ビュー描画エンジンと統合できます。

RESTful APIを構築するには、さまざまなHTTPメソッド（GET、POST、PUT、DELETE）を処理するエンドポイントを設定し、適切なステータスコードとデータ形式で応答します。アプリケーションの構造化、異なるルートの管理、エラーの効果的な処理についても学びます。

また、認証、ロギング、リクエスト検証のためのミドルウェアを組み込むことで、APIをより安全で信頼性の高いものにすることもできます。Postmanなどのツールを使用してテストを行い、データストレージにはMongoDBやPostgreSQLを使用して、完全で機能的なRESTful APIを構築し、デプロイとスケーリングを行うことができます。`,
      like: 8,
      userId: "sample-user-id",
    },
    {
      title: "GraphQL入門",
      content: `GraphQLはAPIのためのクエリ言語であり、データの型システムを使用してクエリを実行するサーバーサイドランタイムです。RESTとは異なり、GraphQLではクライアントが必要なデータを正確に要求できるため、より効率的で柔軟です。

GraphQL APIは、エンドポイントではなく、型とフィールドによって組織されます。これにより、クライアントは1つのリクエストで複数のリソースをクエリし、予測可能な応答を得ることができます。GraphQLスキーマは、APIの構造を定義し、型、クエリ、ミューテーション、およびサブスクリプションを含みます。

GraphQLを使用すると、データの単一の信頼できるソースを提供する強力で柔軟なAPIを構築できます。GraphQLサーバーはさまざまなプログラミング言語で実装でき、Apollo ServerやGraphQL Yogaなどの人気フレームワークはGraphQL APIを構築するためのツールを提供します。

GraphQLはまた、サブスクリプションを通じてリアルタイムの更新をサポートしており、データが変更されたときにクライアントに更新を受け取ることができます。これにより、チャットアプリケーションやライブダッシュボードなど、リアルタイム機能を必要とするアプリケーションに最適です。`,
      like: 12,
      userId: "sample-user-id",
    },
    {
      title: "Next.jsの探求",
      content: `Next.jsは、サーバーサイドレンダリングや静的サイト生成などの追加機能を提供するReactフレームワークです。Next.jsは、Reactアプリケーションの開発体験とパフォーマンスを向上させるよう設計されています。

Next.jsを使用すると、動的ルートを作成し、画像を最適化し、APIルートを使用してサーバーレス関数を構築できます。このフレームワークは、インクリメンタル静的再生成をサポートしており、初期ビルド後に静的コンテンツを更新することができ、サイト全体を再ビルドする必要がありません。

Next.jsは、SEOに優れた高速なウェブサイトの作成を簡素化します。自動コード分割機能により、初期ページロードのサイズを削減し、CSSおよびSassのサポートを内蔵しているため、アプリケーションのスタイリングが容易です。

Next.jsは、ファイルベースのルーティングシステム、高速リフレッシュ、豊富なプラグインエコシステムなどの機能を備え、優れた開発体験を提供します。シンプルな静的サイトから複雑なアプリケーションまで、Next.jsは必要なツールと柔軟性を提供します。`,
      like: 7,
      userId: "sample-user-id",
    },
    {
      title: "Dockerの詳細",
      content: `Dockerは、OSレベルの仮想化を使用して、コンテナと呼ばれるパッケージでソフトウェアを提供するプラットフォームサービス製品のセットです。コンテナは、アプリケーションの実行に必要なすべてを含む分離された環境であり、異なる環境間でソフトウェアを移動して実行することが容易です。

Dockerを使用すると、開発者はすべての依存関係を含むアプリケーションを標準化されたユニットとしてパッケージ化できます。このコンテナ化により、アプリケーションはローカルマシン、データセンター、クラウドのどこにデプロイしても一貫して実行されます。

Dockerを使用して、Docker Composeなどのツールでマルチコンテナアプリケーションを作成できます。これにより、マルチコンテナDockerアプリケーションを定義して実行することができます。Docker SwarmやKubernetesを使用して、コンテナ化されたアプリケーションを大規模にオーケストレーションおよび管理することも可能です。

Dockerは、開発環境を一貫性のあるものにすることで、開発ワークフローを強化し、本番環境と同じ環境を提供します。これにより、「私のマシンでは動く」問題が減少し、CI/CDプロセスが簡素化され、より迅速で信頼性の高いデプロイが可能になります。`,
      like: 11,
      userId: "sample-user-id",
    },
    {
      title: "Kubernetes入門",
      content: `Kubernetesは、コンテナ化されたアプリケーションのデプロイ、スケーリング、および管理を自動化するオープンソースのコンテナオーケストレーションシステムです。Kubernetesは、アプリケーションを論理ユニットにグループ化して、管理と発見を容易にします。

Kubernetesは、分散システムを堅牢に実行するためのフレームワークを提供します。スケーリングとフェイルオーバーをアプリケーションのために行い、デプロイメントパターンを提供し、コンテナのライフサイクルを管理します。また、Kubernetesは宣言的にアプリケーションを定義および管理するための強力なAPIを提供します。

Kubernetesは、Docker、containerd、CRI-Oなどのさまざまなコンテナランタイムをサポートしています。また、ロードバランシング、シークレットおよび構成管理、ストレージオーケストレーションなどの組み込みツールも提供します。

Kubernetesを使用すると、異なる環境間でアプリケーションを一貫してデプロイし、高可用性とスケーラビリティを確保できます。AWS、GCP、Azureなどのクラウドプロバイダーとよく統合され、モダンなクラウドネイティブアプリケーションの重要なコンポーネントとなっています。`,
      like: 14,
      userId: "sample-user-id",
    },
    {
      title: "非同期JavaScriptの理解",
      content: `非同期JavaScript、つまりコールバック、プロミス、async/awaitを使用するJavaScriptは、非同期操作を管理するための強力なツールです。非同期プログラミングは、ネットワークリクエスト、ファイルの読み書き、タイマーなど、完了に時間がかかるタスクにとって不可欠です。

コールバックは、他の関数に引数として渡される関数であり、非同期操作が完了したときに実行されます。しかし、コールバック地獄に陥ることがあり、コードの読み取りと保守が難しくなります。

プロミスは、非同期操作を管理するためのより構造化された方法を提供し、現在、将来、または決して利用できない値を表します。プロミスには、非同期操作の完了、失敗、およびクリーンアップを処理するためのthen、catch、およびfinallyメソッドがあります。

ES2017で導入されたasync/awaitは、プロミスに基づいており、同期的に見える非同期コードを記述できるようにし、読みやすく理解しやすくします。asyncキーワードを使用して非同期関数を宣言し、awaitキーワードを使用してプロミスが解決されるまで実行を一時停止します。

これらのツールを使用することで、開発者はより効率的で読みやすく、保守しやすい非同期コードを書き、アプリケーションのパフォーマンスと応答性を向上させることができます。`,
      like: 9,
      userId: "sample-user-id",
    },
  ];
  function getRandomTags(count: number): string[] {
    const shuffled = [...tags].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
  const user = {
    name: "sample-user-name",
    email: "sample-user-email",
    image: "/sample-icon.jpg",
    admin: false,
  };

  let createdUser;
  const existingUser = await db.user.findUnique({
    where: { email: user.email },
  });

  if (!existingUser) {
    createdUser = await db.user.create({
      data: user,
    });
  }
  else {
    createdUser = existingUser;
  }

  for (const a of articles) {
    const randomTags = getRandomTags(3);
    const tagsBinary = tagsToBinary(randomTags);

    await db.article.create({
      data: {
        title: a.title,
        content: a.content,
        like: a.like,
        userId: createdUser.id,
        tags: tagsBinary,
      },
    });
  }
}
main()
  .catch(e => {
    console.log(e);
  })
  .finally(async () => {
    await db.$disconnect();
  });
